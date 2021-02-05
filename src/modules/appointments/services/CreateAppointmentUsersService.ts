import { inject, injectable } from 'tsyringe';

import ICreateAppointmentUsersDTO from '../dtos/ICreateAppointmentUsersDTO';

import AppointmentUser from '../infra/typeorm/entities/AppointmentsUsers';
import IAppointmentUsersRepository from '../repositories/IAppointmentUsersRepository';

@injectable()
class CreateAppointmentUsersService {
  constructor(
    @inject('AppointmentUserRepository')
    private appointmentUsersRepository: IAppointmentUsersRepository,
  ) { }

  public async execute({
    total_price,
    paid,
    appointment_id,
    user_id,
  }: ICreateAppointmentUsersDTO): Promise<AppointmentUser> {
    const appointmentUsers = await this.appointmentUsersRepository.create({
      total_price,
      paid,
      appointment_id,
      user_id,
    });

    return appointmentUsers;
  }
}

export default CreateAppointmentUsersService;
