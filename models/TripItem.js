var mongoose = require('mongoose');

var tripItemSchema = new mongoose.Schema({
  name: String,
  updated: {type: Date, default: Date.now},
  scheduledAt: Date,
  location:{
    name: String,
    latitude: Number,
    longitude: Number,
  }
});

module.exports = mongoose.model('TripItem', tripItemSchema);
