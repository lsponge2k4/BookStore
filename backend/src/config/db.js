import { Sequelize } from "sequelize";

const sequelize = new Sequelize('bookstore_db', 'root', '123456', {
    host: 'localhost',
    port: 3307,
    dialect: 'mysql'
});

const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export default connect;