import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from 'typeorm';
import Users from './Users';

@Entity()
class Addresses {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @Column()
  country: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  street: string;

  @Column()
  street_number: string;

  @Column()
  postcode: string;

  @Column()
  gps_lat: string;

  @Column()
  gps_long: string;

  @ManyToOne(() => Users, user => user.id)
  @JoinColumn({ name: 'user_id' })
  user: Users;
}

export default Addresses;
