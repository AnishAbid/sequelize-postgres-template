const jwt = require('jsonwebtoken')

exports.getJWTToken = async (obj) => {
    return jwt.sign({ obj }, process.env.JWT_SECRET_KEY)
}
