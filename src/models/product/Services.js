const { DataTypes } = require("sequelize")

module.exports = (sequelize) =>{
    sequelize.define(
        "Services",
        {
            id:{
               type: DataTypes.UUID,
               defaultValue: DataTypes.UUIDV4,
               allowNull: false,
               primaryKey: true,

            },
            name:{
                type: DataTypes.STRING,
                allowNull: true
            },
            description:{
                type: DataTypes.TEXT,
                allowNull: true,

            },
            price:{
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false,

            },
            duration:{
                type: DataTypes.INTEGER,
                allowNull: false,
            },
          
            image:{
                type: DataTypes.STRING,
                allowNull: false,
            },

            onSale:{
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },

            discountPercentage:{
                type: DataTypes.DECIMAL(5, 2),
                allowNull: true,
            }
        },
        {
            freezeTableName: true,
            timestamps: false,
          }
    )
}