const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const createConnection = (DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME) => {
  const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    dialect: 'postgres',
    host: DB_HOST,
    port: DB_PORT
  })
  return sequelize
}

const configureModels = (DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME, DIR_PATH) => {
  const db = {}
  const sequelize = createConnection(DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME)
  db.sequelize = sequelize;
  fs
    .readdirSync(DIR_PATH)
    .filter((file) => (file.indexOf('.') !== 0) && (file.slice(-3) === '.js'))
    .forEach((file) => {
      const model = require(path.join(DIR_PATH, file))(sequelize, Sequelize.DataTypes);
      db[model.name] = model;
    });

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  return db
}

module.exports = {
  createConnection,
  configureModels
};
