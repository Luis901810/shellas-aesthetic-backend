const { DataTypes } = require("sequelize")

module.exports =( sequelize ) =>{
    sequelize.define(
        "Booking",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue:DataTypes.UUIDV4,
                primaryKey: true,
            },
            date:{
                type: DataTypes.DATE,
                allowNull: false,
            },
            status:{
                type: DataTypes.ENUM("scheduled", "completed", "cancelled"),
                defaultValue: "scheduled",
            },
        },
        {
            freezeTableName: true,
            timestamps: false,
          }
    )
}