import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import AppointmentsController from '../controller/AppointmentsController';
import AppointmentUsersController from '../controller/AppointmentUsersController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();
const appointmentUsersController = new AppointmentUsersController();

appointmentsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      title: Joi.string().required(),
      date: Joi.date().required(),
    },
  }),
  appointmentsController.create,
);

appointmentsRouter.get(
  '/',
  celebrate({
    [Segments.QUERY]: {
      initial_date: Joi.string().isoDate().required(),
      final_date: Joi.string().isoDate(),
    },
  }),
  appointmentsController.index,
);

appointmentsRouter.get(
  '/:appointment_id/users',
  celebrate({
    [Segments.PARAMS]: {
      appointment_id: Joi.string().uuid().required(),
    },
  }),
  appointmentUsersController.index,
);

export default appointmentsRouter;
