var Trip = require('../models/trip');

var TripRoute = Ember.Route.extend({

  model: function() {
    return Trip.find();
  }

});

module.exports = TripRoute;

