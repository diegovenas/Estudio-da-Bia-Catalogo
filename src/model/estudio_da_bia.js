import Sequelize from "sequelize";
import { connection } from "../databases/connection.js";

 export const caixas = connection.define(
  "caixas",
  {
    id_caixa: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      allowNull: false,
      type: Sequelize.TEXT,
      allowNull: false,
    },
    img: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    valor: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    medidas: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    tempocriacao: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    quantidademinima: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    descricao: {
      type: Sequelize.TEXT,
      allowNull: false,
    }
  },
  {
    freezeTableName: true,
    createdAt: false,
    updateAt: false,
    timestamps: false,
  }
);
