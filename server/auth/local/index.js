'use strict';

var express = require('express');
var passport = require('passport');
var auth = require('../auth.service');

var router = express.Router();

router.post('/', function(req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    var error = err || info;
    if (error) return res.json(401, error);
    if (!user) return res.json(404, {message: 'Something went wrong, please try again.'});
    
    req.logIn(user, function(err){
      if(err) return next(err);
      res.json({});
    });
    
  })(req, res, next)
});

router.delete('/', function(req, res, next){
  req.logout();
  res.json({});
});

module.exports = router;