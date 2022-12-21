import { validate } from 'class-validator';
import { Op } from 'sequelize';
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column({
    // type: DataType.UUID,
    type: DataType.INTEGER,
    autoIncrement: true,
    // defaultValue: DataType.UUIDV4,
    allowNull: false,
    primaryKey: true,
  })
  id: string;

  @Column({
    allowNull: true,
  })
  first_name: string;

  @Column({
    allowNull: true,
  })
  last_name: string;
}
