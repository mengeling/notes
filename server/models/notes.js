"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class notes extends Model {
    static associate(models) {}
  }
  notes.init(
    {
      note: DataTypes.TEXT,
      tag: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "notes",
    }
  );
  return notes;
};
