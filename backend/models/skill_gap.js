'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Skill_Gap extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Skill_Gap.init({
    user_id: DataTypes.UUID,
    existing_skills: DataTypes.ARRAY,
    target_role: DataTypes.STRING,
    missing_skills: DataTypes.ARRAY,
    suggested_courses: DataTypes.JSONB
  }, {
    sequelize,
    modelName: 'Skill_Gap',
  });
  return Skill_Gap;
};