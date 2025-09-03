'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Skills_Gap extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Skills_Gap.init({
    skill_id: DataTypes.UUID,
    user_id: DataTypes.UUID,
    existing_skills: DataTypes.ARRAY(DataTypes.STRING),
    target_role: DataTypes.STRING,
    missing_skills: DataTypes.ARRAY(DataTypes.STRING),
    suggested_courses: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Skills_Gap',
  });
  return Skills_Gap;
};