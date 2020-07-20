import { Router } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import User from '../models/Users';
import UserRespository from '../repositories/UsersRepository';

const usersRouter = Router();

usersRouter.get('/', async (request, response) => {
  const userRepository = getRepository(User);
  const users = await userRepository.find();
  return response.status(200).json(users);
});

usersRouter.get('/:name', async (resquest, response) => {
  const userRepository = getCustomRepository(UserRespository);
  const users = userRepository.findbyName(resquest.params.name);
  return response.status(200).json(users);
});

export default usersRouter;
