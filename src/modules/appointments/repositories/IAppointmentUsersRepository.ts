import ICreateAppointmentUsersDTO from '../dtos/ICreateAppointmentUsersDTO';
import AppointmentUser from '../infra/typeorm/entities/AppointmentsUsers';

export default interface IAppointmentUsersRepository {
  create(data: ICreateAppointmentUsersDTO): Promise<AppointmentUser>;
  findAllUsersInAppointment(appointment_id: string): Promise<AppointmentUser[]>;
}
