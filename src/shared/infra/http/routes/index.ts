import { Router } from 'express';

const routes = Router();

routes.use('/users', () => {
  console.log('teste');
});

export default routes;
