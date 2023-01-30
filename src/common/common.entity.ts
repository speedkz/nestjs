import { Entity, Column } from 'typeorm';

@Entity()
export class CommonType {
  @Column({ nullable: false })
  created_at: Date;

  @Column({ nullable: false })
  created_by: number;

  @Column({ nullable: false })
  updated_at: Date;

  @Column({ nullable: false })
  updated_by: number;

  @Column()
  deleted_at: Date;

  @Column()
  deleted_by: number;
}
