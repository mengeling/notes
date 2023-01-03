// "use strict";
import { Model } from "sequelize";
// const { Model } = require('sequelize');

export default (sequelize, DataTypes) => {
  class Notes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Notes.init(
    {
      title: DataTypes.STRING,
      note: DataTypes.TEXT,
      tag: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Notes",
    }
  );
  return Notes;
};
