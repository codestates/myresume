"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Resume extends Model {}
  Resume.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      mobile: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      introduction: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      career1: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      career2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      career3: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Resume",
      freezeTableName: true,
    }
  );
  return Resume;
};
