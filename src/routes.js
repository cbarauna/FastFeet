import { Router } from 'express';

import RecipientController from './app/controllers/RecipientController';

const routes = new Router();

routes.post('/recipient', RecipientController.store);

export default routes;
