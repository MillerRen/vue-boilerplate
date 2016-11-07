var Rbac = require('easyrole');
var rbac = new Rbac();

rbac.setRoles(['admins', 'editors', 'developers', 'users']);

// admins
rbac.admins.allow('*');

module.exports = function(app) {

  app.use(function(req, res, next){
      req.rbac = rbac;
      next();
  });

};