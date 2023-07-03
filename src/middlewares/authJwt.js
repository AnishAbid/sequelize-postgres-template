const status = require('http-status')
const jwt = require('jsonwebtoken');
const APIError = require('../utils/apiError');
const { MESSAGES } = require('../utils/constants');
const { DB_NAME } = process.env;

exports.authJwt = async (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  if (authorizationHeader) {
    try {
      const token = req.headers.authorization.split(' ')[1]; // Bearer <token>
      result = await jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.GLOBAL_DB = DB_NAME
      req.user = result
      next();
    } catch (err) {
      console.log(err)
      return next(new APIError(MESSAGES.NO_TOKEN, status.BAD_REQUEST))
    }
  } else {
    return next(new APIError(MESSAGES.NO_TOKEN, status.BAD_REQUEST))
  }
}