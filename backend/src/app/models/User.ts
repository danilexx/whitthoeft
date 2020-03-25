import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToOne,
  JoinColumn,
  BeforeInsert,
  ManyToMany,
  JoinTable,
  ManyToOne,
  OneToMany,
  BeforeUpdate,
} from "typeorm";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import authConfig from "../../config/auth";

import { Address } from "./Address";
import { Product } from "./Product";
import { Cart } from "./Cart";
import { CreditCard } from "./CreditCard";

@Entity()
export class User extends BaseEntity {
  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (this.password) {
      this.passwordHash = await bcrypt.hash(this.password, 8);
    }
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", {
    length: 150,
  })
  name: string;

  @Column("varchar", {
    length: 100,
  })
  email: string;

  @OneToMany(() => Address, (address) => address.user)
  addresses: Address[];

  @Column("varchar", {
    length: 15,
  })
  cpf: string;

  @Column("varchar", {
    select: false,
  })
  passwordHash: string;

  password: string;

  @Column("timestamp")
  birth: string;

  @Column("varchar")
  tel: string;

  @ManyToMany(() => Product)
  @JoinTable()
  favorites: Product[];

  @OneToMany(() => Cart, (cart) => cart.user)
  cart: Cart[];

  async checkPassword(password) {
    if (!this.passwordHash) {
      const { passwordHash } = await User.findOne(this.id, {
        select: ["passwordHash"],
      });
      this.passwordHash = passwordHash;
    }
    return bcrypt.compare(password, this.passwordHash);
  }

  @OneToMany(() => CreditCard, (creditCard) => creditCard.user)
  creditCards: CreditCard[];

  generateToken() {
    return jwt.sign(
      { id: this.id, email: this.email, name: this.name },
      authConfig.secret,
      {
        expiresIn: authConfig.expiresIn,
      }
    );
  }
}
