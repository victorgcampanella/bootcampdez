import { Router } from 'express';

const routes = new Router();

routes.get('/', (request, response) =>
  response.json({ message: 'Hello Victor' })
);

export default routes;
