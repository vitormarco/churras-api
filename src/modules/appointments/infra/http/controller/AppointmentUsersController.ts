import { Response, Request } from 'express';

import { container } from 'tsyringe';

import ListAppointmentUsersService from '@modules/appointments/services/ListAppointmentUsersService';

class AppointmentUsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { appointment_id } = request.params;

    const listAppointmentUsers = container.resolve(ListAppointmentUsersService);

    const appointmentUsers = await listAppointmentUsers.execute(appointment_id);

    return response.json(appointmentUsers);
  }
}

export default AppointmentUsersController;
