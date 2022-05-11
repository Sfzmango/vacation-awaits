const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Activity extends Model {}

Activity.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reviews: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    contact_number: {
      type: DataTypes.INT,
      allowNull: true,
    },
    image_url: {
      type: DataTypes.VARCHAR(100),
      allowNull: false,
    },
    web_url: {
      type: DataTypes.VARCHAR(100),
      allowNull: false,
    },
    opening_hour: {
      type: DataTypes.INT,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "activity",
  }
);

module.exports = Activity;
