import { Router } from 'express';

import RecipientController from './app/controllers/RecipientController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/login', SessionController.login);

routes.use(authMiddleware);
routes.post('/recipient', RecipientController.store);

routes.get('/recipient', RecipientController.index);

export default routes;
