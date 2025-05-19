import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EntityBaseWithDate } from './base.entity';
import { ModuleServiceTag } from './module-service-tag.entity';

@Entity()
export class ModuleService extends EntityBaseWithDate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  duration: number;

  @Column()
  status: boolean;

  @ManyToMany(
    () => ModuleServiceTag,
    (moduleServiceTag) => moduleServiceTag.moduleServices,
  )
  @JoinTable({
    name: 'module_service_tags',
  })
  moduleServiceTags: ModuleServiceTag[];
}
