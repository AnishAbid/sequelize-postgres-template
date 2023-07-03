const status = require('http-status')
const APIError = require('../utils/apiError')
const { MESSAGES } = require('../utils/constants')

const handleSequelizeUniqueConstraintError = (err) => {
    const error = new APIError(err.message, status.BAD_REQUEST)
    return error
}

const handleSequelizeValidationError = (err) => {
    const errMsgs = err.errors.map((error) => error.message)
    return new APIError(errMsgs[0], status.BAD_REQUEST)
}

const handleJsonWebTokenError = (err) => {
    const errMsg = 'Provide valid auth token'
    return new APIError(errMsg, status.BAD_REQUEST)
}

module.exports = async (err, req, res, next) => {
    let error
    console.log(err)
    if (req.transaction) {
        await req.transaction.rollback()
    }
    if (err.name === 'SequelizeUniqueConstraintError')
        error = handleSequelizeUniqueConstraintError(err)
    else if (err.name === 'SequelizeValidationError')
        error = handleSequelizeValidationError(err)
    else if (err.type === 'StripeInvalidRequestError')
        error = new APIError('Provided account details are incorrect', 400)
    else if (err.name === 'JsonWebTokenError')
        error = handleJsonWebTokenError(err)
    else if (err.message.includes('duplicate database')) {
        error = new APIError(MESSAGES.ACADEMY_ALREADY_EXISTS, status.BAD_REQUEST)
    } else if (err instanceof APIError)
        error = new APIError(err.message, err.statusCode)
    else
        error = new APIError(
            MESSAGES.INTERNAL_SERVER_ERROR,
            status.INTERNAL_SERVER_ERROR
        )
    res.status(error.statusCode).json({
        status: MESSAGES.FAILED,
        error: true,
        data: {
            message: error.message,
            statusCode: error.statusCode,
        }
    })
}
