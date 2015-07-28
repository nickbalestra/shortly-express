var db = require('../config');
var Link = require('./link.js')
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',
  // hasTimestamps: true,

  links: function() {
    return this.hasMany(Link);
  },
  initialize: function(param){
    //Should we store hash here?
    //set password model.set('password')
    //var harsh = bcrypt.hashSync(this.params.password);
  }
});

module.exports = User;