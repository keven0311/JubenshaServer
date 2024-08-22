import { Optional } from "sequelize";
import {
  Table,
  Model,
  Column,
  DataType,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";

interface JubenAttributes {
  id: number;
  title: string;
  price: number;
  player_type?: string;
  difficulty: string;
  mod: string;
  description: string;
  summary: string;
  num_players: number[];
  theme: string[];
  category: string[];
  background: string[];
  thumbnail: string[];
  created_at?: Date;
  updated_at?: Date;
  playtime?: number;
  comment?: string;
}

interface JubenCreationAttributes extends Optional<JubenAttributes, "id"> {}

@Table({
  timestamps: true,
  tableName: "jubens",
  modelName: "Juben",
  underscored: true,
})
export default class Juben extends Model<
  JubenAttributes,
  JubenCreationAttributes
> {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  declare id: string;

  @Column({
    type: DataType.STRING,
  })
  declare title: string;

  @Column({
    type: DataType.INTEGER,
  })
  declare price: number;

  @Column({
    type: DataType.STRING,
  })
  declare player_type: string;

  @Column({
    type: DataType.STRING,
  })
  declare difficulty: string;

  @Column({
    type: DataType.STRING,
  })
  declare mod: string;

  @Column({
    type: DataType.TEXT,
  })
  declare description: string;

  @Column({
    type: DataType.TEXT,
  })
  declare summary: string;

  @Column({
    type: DataType.ARRAY(DataType.INTEGER),
  })
  declare num_players: number[];

  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  declare theme: string[];

  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  declare category: string[];

  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  declare background: string[];

  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  declare thumbnail: string[];

  @Column({
    type: DataType.INTEGER,
  })
  declare playtime: number;

  @Column({
    type: DataType.TEXT,
  })
  declare comment: string;

  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;
}
