import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm';
import Addresses from './Addresses';

@Entity('users')
class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  status: string;

  @Column()
  auth: string;

  @OneToMany(() => Addresses, address => address.user)
  @JoinColumn({ name: 'id' })
  address: Addresses;
}
export default Users;
