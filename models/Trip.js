var mongoose = require('mongoose');
var TripItem = require('../models/TripItem');

var tripSchema = new mongoose.Schema({
  name: String,
  items: [TripItem]
});

module.exports = mongoose.model('Trip', tripSchema);
