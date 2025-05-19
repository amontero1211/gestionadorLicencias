import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IdentificationType } from '../enums/identification-type.enum';
import { EntityBaseWithDate } from './base.entity';

@Entity()
export class Customer extends EntityBaseWithDate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column()
  identificationNumber: string;

  @Column({
    type: 'enum',
    enum: IdentificationType,
  })
  identificationType: IdentificationType;
}
