import { inject, injectable } from 'tsyringe';
import Appointment from '../infra/typeorm/entities/Appointment';

import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

interface IRequest {
  initial_date?: string;
  final_date?: string;
}

@injectable()
class ListAppointmentsService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) { }

  public async execute({
    initial_date,
    final_date,
  }: IRequest): Promise<Appointment[]> {
    const appointment = await this.appointmentsRepository.findAllAppointment({
      date_start: initial_date,
      date_end: final_date,
    });

    return appointment;
  }
}

export default ListAppointmentsService;
