import { CommonType } from 'src/common/common.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tenant extends CommonType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  kana_name: string;

  @Column({ nullable: false })
  short_name: string;

  @Column({ nullable: false })
  postal_code: string;

  @Column({ nullable: false })
  address: string;

  @Column({ nullable: false })
  teller: string;

  @Column({ nullable: false })
  telephone: string;

  @Column({ nullable: false })
  mail: string;

  @Column({ nullable: false })
  extension_code: string;

  @Column({ nullable: false })
  is_disable: boolean;

  @Column({ nullable: false })
  user_role: number;

  @Column({ nullable: false })
  contract_date: Date;

  @Column({ nullable: false })
  expiration_date: Date;
}
