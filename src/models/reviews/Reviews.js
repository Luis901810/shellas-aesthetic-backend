const { DataTypes } = require("sequelize");


module.exports = (sequelize) =>{
    sequelize.define(
        "Reviews",
        {
            id:{
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            rating:{
                type: DataTypes.INTEGER,
                allowNull: false,
                validate:{
                    min: 1,
                    max: 5
                }
            },
            comment:{
                type: DataTypes.TEXT,
                allowNull: true,
            },
            deletedAt: {
                type: DataTypes.DATE,
                allowNull: true,
            },
        },  {
            freezeTableName: true,
            
          }
    )
}