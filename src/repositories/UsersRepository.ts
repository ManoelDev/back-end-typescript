import { EntityRepository, Repository } from 'typeorm';
import Users from '../models/Users';

@EntityRepository(Users)
export default class UserRespository extends Repository<Users> {
  public findbyName(name: string): Promise<Users[]> {
    return this.find({
      where: { name },
      select: ['id', 'name', 'email', 'created_at'],
    });
  }
}
