import { inject, injectable } from 'tsyringe';

@injectable()
class ListAppointmentUsers {
  constructor(
    @inject('AppointmentUserRepository')
    private appointmentUsers: IAppointmentUsersRepository,
  ) { }
}

export default ListAppointmentUsers;
