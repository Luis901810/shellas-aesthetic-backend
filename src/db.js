require("dotenv").config();
const { Sequileze } = require("sequelize");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequileze(`
    postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
{
    logging: false,
    native: false,
});

require("./models/models")(sequelize);

module.exports = {
    ...sequelize.models,
    conn: sequelize,
}