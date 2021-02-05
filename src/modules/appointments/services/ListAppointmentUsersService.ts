import { inject, injectable } from 'tsyringe';

import IAppointmentUsersRepository from '../repositories/IAppointmentUsersRepository';
import AppointmentUser from '../infra/typeorm/entities/AppointmentsUsers';

@injectable()
class ListAppointmentUsers {
  constructor(
    @inject('AppointmentUserRepository')
    private appointmentUsers: IAppointmentUsersRepository,
  ) { }

  public async execute(appointment_id: string): Promise<AppointmentUser[]> {
    const appointmentUsers = await this.appointmentUsers.findAllUsersInAppointment(
      appointment_id,
    );

    return appointmentUsers;
  }
}

export default ListAppointmentUsers;
