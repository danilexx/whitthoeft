import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToMany,
  JoinTable,
  OneToMany,
  ManyToOne,
} from "typeorm";

import { File } from "./File";
import { Comment } from "./Comment";
import { Cart } from "./Cart";

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column("double precision")
  price: number;

  @Column("double precision", {
    nullable: true,
  })
  oldPrice: number;

  @Column("enum", {
    enum: ["calça", "camiseta"],
  })
  type: string;

  @OneToMany(() => Comment, (comment) => comment.product)
  comments: Comment[];

  @ManyToOne(() => File, {
    eager: true,
  })
  img: File;

  @ManyToMany(() => File)
  @JoinTable()
  imgList: File[];

  @OneToMany(() => Cart, (cart) => cart.product)
  cart: Cart[];
}
