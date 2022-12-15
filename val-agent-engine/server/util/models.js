const db = require("./database");
const {DataTypes} = require("sequelize");

module.exports = {
    Agent: db.define("agent", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        image: DataTypes.STRING,
        name: DataTypes.STRING,
        born: DataTypes.STRING,
        role: DataTypes.STRING,
        abilities: DataTypes.STRING,
        ult: DataTypes.STRING
    })
};