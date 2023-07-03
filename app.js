var express = require('express');
const fileUpload = require("express-fileupload");
const cors = require("cors");
const path = require('path')
const { DB_NAME, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD } = process.env
const db = require("./src/config/db")
const globalError = require('./src/middlewares/globalError')
const { MESSAGES, ROUTES } = require('./src/utils/constants')
global.db = {}

// Init Express App
var app = express();
const router = express.Router();

// Enable JSON and URL Encoding
app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: "500mb" }));
app.use(fileUpload())

// Enable Cors
var corsOptions = {
  origin: '*',
}
app.use(cors(corsOptions));

const v1Routes = require('./src/routes/v1');
app.use(ROUTES.V1_ROUTES, v1Routes(router));

// Init DB Connection
global.db[DB_NAME] = db.configureModels(DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME, path.join(__dirname + '/src/models/'))

// Init Root Route
app.get("/", (req, res) => {
  res.json({ message: MESSAGES.NOTHINGNESS });
});


// Use Global Error Handler
app.use(globalError);

module.exports = app;
