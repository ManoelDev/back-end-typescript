import { Router } from 'express';

import usersRoutes from './users.routes';
import addressRoutes from './addresses.routes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/address', addressRoutes);

export default routes;
