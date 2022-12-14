const db = require("./database");
const { DataTypes } = require("sequelize");

module.exports = {
  Agent: db.define("agent", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    image: DataTypes.STRING,
    name: DataTypes.STRING,
    born: DataTypes.STRING,
    role: DataTypes.STRING,
    abilities: DataTypes.STRING,
    ult: DataTypes.STRING,
  }),

  User: db.define("user", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    username: DataTypes.STRING,
    hashedPass: DataTypes.STRING,
  }),

  Team: db.define("team", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
  })
};
