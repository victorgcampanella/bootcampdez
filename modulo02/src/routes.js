import { Router } from 'express';
// import User from './app/models/User';

import UserController from './app/controllers/UserController';

const routes = new Router();

// Usar para teste quando nao tiver feito um controller ainda
// routes.get('/', async (request, response) => {
//   const user = await User.create({
//     name: 'Victor',
//     email: 'vgcgalvao@gmail.com',
//     password_hash: '123456',
//   });
//   return response.json(user);
// });

routes.post('/users', UserController.store);

export default routes;
