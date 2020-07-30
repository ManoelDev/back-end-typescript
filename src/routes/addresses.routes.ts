import { Router } from 'express';
import { getRepository } from 'typeorm';
import Addresses from '../models/Addresses';

const addressRouter = Router();

addressRouter.get('/', async (request, response) => {
  const addressRepository = getRepository(Addresses);

  const address = await addressRepository.find({ relations: ['user'] });
  return response.status(200).json(address);
});

addressRouter.get('/:user_id', async (request, response) => {
  const { user_id } = request.params;

  const addressRepository = getRepository(Addresses);

  const address = await addressRepository.findOne({ where: { user_id } });
  if (!address) return response.status(401).json({ error: 'Not Authorized.' });
  return response.status(200).json(address);
});

addressRouter.put('/', async (request, response) => {
  const { user_id, country, state, city, street, street_number, postcode, gps_lat, gps_long } = request.body;

  const addressRepository = getRepository(Addresses);

  const address = await addressRepository.findOne({ where: { user_id } });

  if (!address) {
    await addressRepository.save({ user_id, country, state, city, street, street_number, postcode, gps_lat, gps_long });
    return response.status(200).json({ country, state, city, street, street_number, postcode, gps_lat, gps_long });
  }
  await addressRepository.update({ user_id }, { country, state, city, street, street_number, postcode, gps_lat, gps_long });

  return response.status(200).json({ country, state, city, street, street_number, postcode, gps_lat, gps_long });
});

export default addressRouter;
