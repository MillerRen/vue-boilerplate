'use strict';

var express = require('express');
var config = require('../../config/environment');

var mongoose = require('mongoose');
var Grid = require('gridfs-stream');
var multer = require('multer');
var gfs = Grid(mongoose.connection.db, mongoose.mongo);
var storage = require('multer-gridfs-storage')({
      gfs:gfs,
      metadata: function(req, file, cb){
          cb(null, {user:req.user._id});
      }
  });
var upload = multer({ storage: storage });

var auth = require('../../auth/auth.service');

var controller = require('./file.controller');

var router = express.Router();

router.get('/', auth.isAuthenticated(), controller.count, controller.index);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', auth.isAuthenticated(), upload.single('file'), controller.create);
router.put('/:id', auth.isAuthenticated(), controller.update);
router.patch('/:id', auth.isAuthenticated(), controller.update);
router.delete('/:id', auth.isAuthenticated(), controller.destroy);

module.exports = router;