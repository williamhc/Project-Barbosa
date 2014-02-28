var mongoose = require('mongoose');

var tripSchema = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Trip', tripSchema);
