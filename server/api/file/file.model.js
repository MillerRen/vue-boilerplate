'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// var FileSchema = new Schema({
//   filename: String,
//   fieldname: String,
//   originalname: String,
//   encoding: String,
//   mimetype: String,
//   type: String,
//   size: Number,
//   destination: String,
//   path: String,
//   active: Boolean
// });

var FileSchema = new Schema({}, {strict: false});
var FileModel = mongoose.model('File', FileSchema, 'fs.files');

FileModel.ensureIndexes({'metadata.user':1});

module.exports = FileModel;