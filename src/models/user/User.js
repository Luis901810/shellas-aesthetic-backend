const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "User",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            email:{
                type: DataTypes.STRING,
                allowNull: true,
                unique: true,
                validate:{
                    isEmail:true
                }
            },
            phone: {
                type: DataTypes.STRING,
                allowNull: true,
                unique: true,
            },
            googleId:{
                type: DataTypes.STRING,
                unique: true,
                allowNull:true,

            },
            facebookId: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: true,
            },
            password:{
                type: DataTypes.STRING,
                allowNull: true,

            },
            role: {
                type: DataTypes.ENUM('admin', 'client'),
                allowNull: false,
                defaultValue: 'client',
            },
        },
            {
                freezeTableName: true,
                timestamps: false,
              }
        
        
    );
};