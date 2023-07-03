
const Joi = require('joi');

exports.registerSchema = Joi.object({
  username: Joi.string().required().messages({
    'string.empty': `Username cannot be an empty field`,
    'any.required': `Username is a required field`
  }),
  email: Joi.string().email().required().messages({
    'string.email': `Email should be a valid Email`,
    'string.empty': `Email cannot be an empty field`,
    'any.required': `Email is a required field`
  }),
  password: Joi.string().min(8).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).required().messages({
    'string.min': `Password must be greater than 8 Characters`,
    'string.pattern.base': `Password must contain an Upper case, a Lower case, a Special Character and a digit`,
    'string.empty': `Password cannot be an empty field`,
    'any.required': `Password is a required field`
  }),
  confirmPassword: Joi.any().valid(Joi.ref('password')).required().messages({
    'any.only': `Confirm Password must match Password`,
    'string.empty': `Confirm Password cannot be an empty field`,
    'any.required': `Confirm Password is a required field`
  }),
  firstName: Joi.string().required().messages({
    'string.empty': `First Name cannot be an empty field`,
    'any.required': `First Name is a required field`
  }),
  lastName: Joi.string().required().messages({
    'string.empty': `Last Name cannot be an empty field`,
    'any.required': `Last Name is a required field`
  }),
  phone: Joi.string().required().messages({
    'string.empty': `Last Name cannot be an empty field`,
    'any.required': `Last Name is a required field`
  }),
})

exports.loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': `Email should be a valid Email`,
    'string.empty': `Email cannot be an empty field`,
    'any.required': `Email is a required field`
  }),
  password: Joi.string().required().messages({
    'string.empty': `Password cannot be an empty field`,
    'any.required': `Password is a required field`
  })
})