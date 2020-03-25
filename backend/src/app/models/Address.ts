import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { User } from "./User";

@Entity()
export class Address extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.addresses)
  @JoinColumn()
  user: User;

  @Column("varchar", {
    length: 100,
  })
  street: string;

  @Column("integer")
  number: number;

  @Column("varchar", {
    length: 20,
  })
  state: string;

  @Column("varchar", {
    length: 100,
  })
  city: string;

  @Column("varchar", {
    length: 200,
    nullable: true,
  })
  complement: string;

  @Column("varchar", {
    length: 100,
  })
  district: string;

  @Column("varchar", {
    length: 9,
  })
  cep: string;
}
