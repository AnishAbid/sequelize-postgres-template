const sequelizePaginate = require('sequelize-paginate');
const { Op } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    firstName: {
      type: DataTypes.STRING(50),
    },
    lastName: {
      type: DataTypes.STRING(50),
    },
    isActive: {
      type: DataTypes.BOOLEAN(1),
      defaultValue: true
    },
    profileUrl: {
      type: DataTypes.STRING(150)
    },
    phone: {
      type: DataTypes.STRING(15),
      allowNull: false
    }
  });

  User.associate = function (models) {
    User.belongsTo(models.role)
  };

  sequelizePaginate.paginate(User);

  return User;
};