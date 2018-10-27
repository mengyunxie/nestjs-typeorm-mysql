import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tenantId: number;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 500 })
  contactName: string;

  @Column({ length: 500 })
  contactEmail: string;

  @Column()
  password: number;

  @Column({ length: 500 })
  address: string;

  @Column({ length: 500 })
  domain: string;

  @Column({ length: 500 })
  createdTime: string;

  @Column({ length: 500 })
  updatedTime: string;

  @Column({ length: 500 })
  description: string;
}