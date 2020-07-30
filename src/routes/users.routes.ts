import { Router } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import User from '../models/Users';
const usersRouter = Router();

usersRouter.get('/', async (request, response) => {
  const repo = getRepository(User);
  const users = await repo.find({
    select: ['id', 'name', 'email', 'status'],
    relations: ['address'],
  });
  return response.status(200).json(users);
});

usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;
  const repo = getRepository(User);
  const userExist = await repo.findOne({ where: { email } });
  if (userExist) return response.status(409).json({ error: 'Email already in use.' });
  const hasdPassword = await bcrypt.hash(password, 8);
  const userReg = repo.create({ name, email, password: hasdPassword });
  await repo.save(userReg);
  delete userReg.password;
  return response.status(201).json(userReg);
});

export default usersRouter;
