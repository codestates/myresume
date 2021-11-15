"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CompanyLink extends Model {}
  CompanyLink.init(
    {
      url: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "CompanyLink",
      freezeTableName: true,
    }
  );
  return CompanyLink;
};
