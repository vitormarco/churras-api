import { Router } from 'express';

import { celebrate, Segments, Joi } from 'celebrate';
import AppointmentsController from '../controller/AppointmentsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();

appointmentsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      title: Joi.string().required(),
      date: Joi.date(),
    },
  }),
  appointmentsController.create,
);

export default appointmentsRouter;
