import { CommonType } from 'src/common/common.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class VehicleType extends CommonType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  tenant_id: number;

  @Column({ nullable: false })
  name: string;
}
