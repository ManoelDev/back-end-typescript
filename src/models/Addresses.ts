import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';
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

  @UpdateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  @OneToOne(() => Users, () => Addresses)
  @JoinColumn({ name: 'user_id' })
  user: Users;
}

export default Addresses;
