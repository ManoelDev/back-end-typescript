import { Router } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/Users';

const usersRouter = Router();

usersRouter.get('/', async (request, response) => {
  const userRepository = getRepository(User);
  const users = await userRepository.find();
  return response.status(200).json(users);
});

export default usersRouter;
