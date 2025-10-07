"use strict";
const { Model } = require("sequelize");
module.exports =  async(sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password_hash: DataTypes.STRING,
      role: {
        type: DataTypes.ENUM("job_seeker", "employer", "analyst"),
        allowNull: false,
      },
      skillset: DataTypes.ARRAY(DataTypes.STRING),
      experience: DataTypes.INTEGER,
      location: DataTypes.STRING,
      education: DataTypes.STRING,
      profileCompletion: DataTypes.FLOAT,
      avatar: DataTypes.STRING,
      registered_on: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      profile_completion: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  await sequelize.sync({ alter: true });
  return User;
};
