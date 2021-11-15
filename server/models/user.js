"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {}
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      profileImg: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      nickname: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "User",
      freezeTableName: true,
    }
  );
  return User;
};
