const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "User",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            number: {
                type: DataTypes.STRING,
                allowNull: false
            },
            history: {
                type: DataTypes.ARRAY(DataTypes.INTEGER),
                allowNull: false
            },
            role: {
                type: DataTypes.ENUM('admin', 'client'),
                allowNull: false,
                defaultValue: 'client',
            },
        },
        { timestamps: false }
    );
};