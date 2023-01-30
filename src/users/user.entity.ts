import { CommonType } from 'src/common/common.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends CommonType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  tenant_id: number;

  @Column({ nullable: false })
  email: string;

  @Column()
  employee_code: string;

  @Column({ nullable: false })
  name: string;

  @Column()
  kana: string;

  @Column({ nullable: false })
  is_disable: number;

  @Column()
  telephone: string;

  @Column({ nullable: false })
  belongs: number;

  @Column({ nullable: false })
  user_role: number;

  @Column()
  last_login_at: Date;
}
