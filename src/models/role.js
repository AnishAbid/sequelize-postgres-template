const sequelizePaginate = require('sequelize-paginate');

module.exports = (sequelize, DataTypes) => {
  const Roles = sequelize.define('role', {
    name: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false
    },
  });

  Roles.associate = function (models) {
    Roles.hasMany(models.user)
  };

  sequelizePaginate.paginate(Roles);

  return Roles;
};