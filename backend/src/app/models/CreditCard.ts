import {
  Entity,
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
  BaseEntity,
} from "typeorm";
import { User } from "./User";

@Entity()
export class CreditCard extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", {
    length: 25,
  })
  number: string;

  @Column("varchar", {
    length: 150,
  })
  name: string;

  @Column("varchar", {
    length: 5,
  })
  expiry: string;

  @Column("varchar", {
    length: 4,
  })
  cvv: string;

  @Column("varchar", {
    length: 20,
  })
  issuer: string;

  @ManyToOne(() => User, (user) => user.creditCards, {
    cascade: true,
  })
  user: User;
}
