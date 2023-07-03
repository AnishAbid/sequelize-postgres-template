require('dotenv').config()
const path = require('path')
const { MESSAGES } = require('../utils/constants')
const db = require('../config/db')


const syncModelsWithAcadifyDB = async () => {
    try {
        models = db.configureModels
            (process.env.DB_HOST, process.env.DB_PORT, process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_NAME,
                path.join(__dirname + "./../models"))
        await models.sequelize.authenticate()
        await models.sequelize.sync({ alter: true})
        console.log(MESSAGES.SUCCESS)
    } catch (error) {
        console.log(MESSAGES.SYNCYING_ERROR, error)
    }
}

syncModelsWithAcadifyDB()
