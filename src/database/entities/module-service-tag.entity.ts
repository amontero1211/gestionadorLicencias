import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EntityBaseWithDate } from './base.entity';
import { ModuleService } from './module-service.entity';

@Entity()
export class ModuleServiceTag extends EntityBaseWithDate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index()
  name: string;

  @ManyToMany(
    () => ModuleService,
    (moduleService) => moduleService.moduleServiceTags,
  )
  @JoinTable({
    name: 'module_service_tags',
  })
  moduleServices: ModuleService[];
}
