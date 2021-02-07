import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IAppointmentUsersRepository from '../repositories/IAppointmentUsersRepository';

interface IUser {
  id: string;
  user_id: string;
  name: string;
  paid: number;
  total_to_pay: number;
}

interface IAppointment {
  total_collected: number;
  total_people: number;
  title: string;
  date: Date;
}
interface IResponse {
  users: IUser[];
  appointment: IAppointment;
}
@injectable()
class ListAppointmentUsers {
  constructor(
    @inject('AppointmentUserRepository')
    private appointmentUsers: IAppointmentUsersRepository,
  ) {}

  public async execute(appointment_id: string): Promise<IResponse> {
    const appointmentUsers = await this.appointmentUsers.findAllUsersInAppointment(
      appointment_id,
    );

    const users = appointmentUsers.map(appointmentUser => ({
      id: appointmentUser.id,
      user_id: appointmentUser.user.id,
      name: appointmentUser.user.name,
      paid: Number(appointmentUser.paid),
      total_to_pay: Number(appointmentUser.total_price),
    }));

    const total_collected = appointmentUsers.reduce(
      (accumulator, appointUser) => {
        return accumulator + Number(appointUser.total_price);
      },
      0,
    );

    const total_people = appointmentUsers.length;

    const appointmentInfo = appointmentUsers.shift();

    if (!appointmentInfo) {
      throw new AppError('Can not find appointment');
    }

    const appointment = {
      total_collected,
      total_people,
      title: appointmentInfo.appointment.title,
      date: appointmentInfo.appointment.date,
    };

    return { users, appointment };
  }
}

export default ListAppointmentUsers;
