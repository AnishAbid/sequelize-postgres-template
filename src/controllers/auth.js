const status = require('http-status')
const dbUtils = require('../utils/db')
const APIError = require('../utils/apiError')
const bcrypt = require('bcryptjs')
const catchAsync = require('../utils/catchAsync')
const { getJWTToken } = require('../config/jwt')
const { Op } = require('sequelize')
const { MESSAGES, TABLES } = require('../utils/constants')
const { DB_NAME } = process.env
const { registerSchema, loginSchema } = require('../utils/schema/auth')

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const { error } = loginSchema.validate(req.body)
  if (error) {
    return next(new APIError(error.details[0].message, status.BAD_REQUEST))
  }
  const user = await dbUtils.findOne(DB_NAME, TABLES.USER, { where: { email: email, } })
  if (!user || !await bcrypt.compare(password, user.password))
    return next(new APIError(MESSAGES.INCORRECT_EMAIL_PASSWORD, status.UNAUTHORIZED))
  const token = await getJWTToken(user)
  res.status(status.OK).json({
    status: MESSAGES.SUCCESS,
    message: MESSAGES.LOGIN_SUCCESS,
    data: {
      user, token
    }
  });
}
const signup = async (req, res, next) => {
  const { error } = registerSchema.validate(req.body)
  if (error) {
    return next(new APIError(error.details[0].message, status.BAD_REQUEST))
  }
  const { username, password, confirmPassword, email, firstName, lastName, phone } = req.body
  const isExist = await dbUtils.findOne(DB_NAME, TABLES.USER, {
    where: {
      [Op.or]: [
        { email: email },
        { phone: phone },
        { username: username },
      ]
    }
  })
  if (isExist) {
    if (isExist.email == email)
      return next(new APIError(MESSAGES.EMAIL_ALREADY_EXISTS, status.BAD_REQUEST))
    if (isExist.username == username)
      return next(new APIError(MESSAGES.USERNAME_ALREADY_EXISTS, status.BAD_REQUEST))
    if (isExist.phone == phone)
      return next(new APIError(MESSAGES.PHONE_ALREADY_EXISTS, status.BAD_REQUEST))
  }
  req.transaction = await global.db[DB_NAME].sequelize.transaction()
  const user = await dbUtils.Insert(DB_NAME, TABLES.USER, {
    username, email, phone, password: bcrypt.hashSync(password, 8), firstName, lastName, role: 2
  })
  const token = await getJWTToken(user)
  await req.transaction.commit()
  res.status(status.OK).json({
    status: MESSAGES.SUCCESS,
    message: MESSAGES.SIGNUP_SUCCESS,
    data: {
      user, token
    }
  });
}

module.exports = {
  login: catchAsync(login),
  signup: catchAsync(signup)
}
