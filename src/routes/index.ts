import { Router } from 'express';

import usersRoute from './users.routes';
import addressRoute from './addresses.routes';

const routes = Router();

routes.use('/users', usersRoute);
routes.use('/address', addressRoute);

export default routes;
