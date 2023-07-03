const authController = require('../../controllers/auth');

module.exports = (router) => {
  router.route('/auth/login').post(authController.login);
  router.route('/auth/register').post(authController.signup);
};