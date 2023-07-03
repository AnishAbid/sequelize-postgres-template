
exports.Insert = async (dbName, tableName, params, transaction) => {
  if (transaction) {
    return await global.db[dbName][tableName].create(params, transaction);
  }
  return await global.db[dbName][tableName].create(params);
}

exports.bulkInsert = async (dbName, tableName, params, transaction) => {
  if (transaction) {
    return await global.db[dbName][tableName].bulkCreate(params, transaction);
  }
  return await global.db[dbName][tableName].bulkCreate(params);
}

exports.findOne = async (dbName, tableName, params) => {
  const result = await global.db[dbName][tableName].findOne(params);
  return result;
}

exports.find = async (dbName, tableName, params) => {
  const result = await global.db[dbName][tableName].find(params);
  return result;
}

exports.findAll = async (dbName, tableName, params) => {
  const result = await global.db[dbName][tableName].findAll(params);
  return result;
}

exports.findandCount = async (dbName, tableName, params) => {
  const result = await global.db[dbName][tableName].findAndCountAll(params);
  return result;
}

exports.Update = async (dbName, tableName, params, transaction) => {
  if (transaction) {
    return await global.db[dbName][tableName].update(params[0], params[1], transaction);
  }
  return await global.db[dbName][tableName].update(params[0], params[1]);
}

exports.Delete = async (dbName, tableName, params, transaction) => {
  if (transaction) {
    return await global.db[dbName][tableName].destroy(params, transaction);
  }
  return await global.db[dbName][tableName].destroy(params, transaction);
}