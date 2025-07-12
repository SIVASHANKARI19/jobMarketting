"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Reports_Download extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reports_Download.init(
    {
      report_id: DataTypes.UUID,
      user_id: DataTypes.UUID,
      report_type: {
        type: DataTypes.ENUM("career_path", "gap", "survey"),
        allowNull: false,
      },
      generated_on: DataTypes.DATE,
      file_url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Reports_Download",
    }
  );
  return Reports_Download;
};
