import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
} from "typeorm";

import { IsEmail, Length } from "class-validator";

@Entity("users")
class UserDAO extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  @Length(6, 255, { message: "Campo 'Nome' deve conter no mínimo 6 á 200 caracteres!" })
  public username: string;

  @Column({ unique: true })
  @IsEmail({}, { message: "E-mail inválido!" })
  public email: string;

  @Column()
  @Length(6, 255, { message: "Campo 'Senha' deve conter no mínimo 6 á 200 caracteres!" })
  public password: string;

  @Column()
  @Length(6, 255, { message: "Campo 'realm' deve conter no mínimo 6 á 200 caracteres!" })
  public realm: string;

  @Column({ default: false })
  public emailVerified: boolean;

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}

export default UserDAO;
