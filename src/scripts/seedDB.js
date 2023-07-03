require('dotenv').config()
const db = require('../config/db')
const path = require('path')
const DB = db.configureModels(process.env.DB_HOST, process.env.DB_PORT, process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_NAME, path.join(__dirname + "./../models"))
const { role, user } = DB;
const bcrypt = require("bcryptjs");
const { MESSAGES } = require('../utils/constants');

const createRolesList = async () => {
  const roleList = [
    {
      name: "Admin",
    },
    {
      name: "User",
    },
  ];
  await role.bulkCreate(roleList);
}

const createAdminUser = async () => {
  const superAdminUser = {
    firstName: "IGAN",
    lastName: "Admin",
    email: "iganadmin@gmail.com",
    password: bcrypt.hashSync("Password@123", 8),
    phone: "+90078601",
    username: "iganadmin",
    isActive: true,
    profilePictureURL: '',
    roleId: 1
  };
  await user.create(superAdminUser);
}

const seedDB = async () => {
  try {
    await createRolesList();
    await createAdminUser();
  } catch (error) {
    console.log(MESSAGES.SEEDING_ERROR, error)
  }
}

seedDB()
