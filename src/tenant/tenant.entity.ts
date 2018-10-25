import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tenant {
  @PrimaryGeneratedColumn()
  tenantId: number;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 500 })
  contactName: string;

  @Column({ length: 500 })
  contactEmail: string;

  @Column({ length: 500 })
  address: string;

  @Column({ length: 500 })
  domain: string;

  @Column({ length: 500 })
  description: string;

}