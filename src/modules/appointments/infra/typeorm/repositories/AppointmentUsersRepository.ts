import ICreateAppointmentUsersDTO from '@modules/appointments/dtos/ICreateAppointmentUsersDTO';
import IAppointmentUsersRepository from '@modules/appointments/repositories/IAppointmentUsersRepository';
import { getRepository, Repository } from 'typeorm';

import AppointmentsUsers from '../entities/AppointmentsUsers';

class AppointmentUsersRepository implements IAppointmentUsersRepository {
  private ormRepository: Repository<AppointmentsUsers>;

  constructor() {
    this.ormRepository = getRepository(AppointmentsUsers);
  }

  public async create({
    appointment_id,
    user_id,
    total_price,
    paid,
  }: ICreateAppointmentUsersDTO): Promise<AppointmentsUsers> {
    return {} as AppointmentsUsers;
  }

  public async findAllUsersInAppointment(
    appointment_id: string,
  ): Promise<AppointmentsUsers[]> {
    const appointmentUsers = this.ormRepository.find({
      where: { appointment_id },
      relations: ['user'],
    });

    return appointmentUsers;
  }
}

export default AppointmentUsersRepository;
