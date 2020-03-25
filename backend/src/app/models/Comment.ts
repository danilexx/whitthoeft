import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  Column,
  BaseEntity,
  JoinTable,
  JoinColumn,
} from "typeorm";
import { Product } from "./Product";
import { User } from "./User";

@Entity()
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, (product) => product.comments, {
    cascade: true,
    nullable: true,
  })
  product: Product;

  @ManyToOne(() => User, {
    eager: true,
  })
  @JoinColumn()
  user: User;

  @Column("int", {
    width: 1,
  })
  rating: number;

  @Column("varchar", {
    length: 255,
  })
  description: string;
}
