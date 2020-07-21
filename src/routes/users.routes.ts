import { Router } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
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
  const users = await userRepository.findbyName(resquest.params.name);
  return response.status(200).json(users);
});

usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;
  const usersRepository = getRepository(User);

  const userExist = await usersRepository.findOne({ where: { email } });

  if (userExist) {
    return response.status(409).json({ error: 'Email em uso' });
  }
  const hasdPassword = await bcrypt.hash(password, 8);

  const userReg = usersRepository.create({ name, email, password: hasdPassword });

  await usersRepository.save(userReg);

  delete userReg.password;
  return response.status(201).json(userReg);
});

export default usersRouter;
