import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  userId: number;

  @Column({ length: 500 })
  username: string;

  @Column({ length: 500 })
  email: string;

  @Column({ length: 500 })
  phone: string;

  @Column()
  tenantId: number;

  @Column()
  customerId: number;

  @Column({ length: 500 })
  subjectLabel: string;

  @Column({ length: 500 })
  enable: string;

  @Column({ length: 500 })
  role: string;

}