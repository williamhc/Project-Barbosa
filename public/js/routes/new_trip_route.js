var trip = require('../models/trip');

var NewTripRoute = Ember.Route.extend({

  renderTemplate: function() {
    this.render('edit_trip', {controller: 'new_trip'});
  },

  model: function() {
    return trip.createRecord();
  },

  deactivate: function() {
    var model = this.get('controller.model');
    if (!model.get('isSaving')) {
      model.deleteRecord();
    }
  }

});

module.exports = NewTripRoute;

