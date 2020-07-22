import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
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

  @OneToOne(() => Addresses, () => Users)
  @JoinColumn({ name: 'addresses_id' })
  address: Addresses;
}
export default Users;
