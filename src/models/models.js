module.exports = sequelize =>{
    require("./user/User")(sequelize)
    require("./product/Services")(sequelize)
    require("./booking/Booking")(sequelize)
    require("./reviews/Reviews")(sequelize)
    


const {
    User,
    Services,
    Booking,
    Reviews
}= sequelize.models;

// user puede tener muchas reservas
User.hasMany(Booking);
Booking.belongsTo(User);

// un usuario puede tener muchas reviews
User.hasMany(Reviews);
Reviews.belongsTo(User); // cada reseña pertece a un unico user

// un servicio puede tener varios reviews
Services.hasMany(Reviews);
Reviews.belongsTo(Services)


// una reserva puede incluir muchos servicios

Booking.belongsToMany( Services, { through: "BookingServices", timestamps: false});
Services.belongsToMany( Booking, { through: "BookingServices", timestamps: false});
}
