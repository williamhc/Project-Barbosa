var mongoose = require('mongoose');
var Trip = require('../models/Trip');

/**
 * Load
 */

exports.load = function(req, res, next, id){
  Trip.load(id, function (err, trip) {
    if (err) return next(err)
    if (!trip) return next(new Error('not found'))
    req.trip = trip
    next()
  })
}

/**
 * GET /trips/:id
 * Get a trip!
 */

exports.showTrip = function(req, res) {
  trip = req.trip
  res.render('trip/show', {
    title: trip.name + " " + trip.id,
    trip: trip
  })
};

/**
 * GET /trips/create
 * Show the new trip page.
 */

exports.renderCreate = function(req, res) {
  res.render('trip/create', {
    title: 'Create new Trip'
  });
};

/**
 * POST /trips/create
 * Create a new trip!
 */

exports.createTrip = function(req, res) {
  trip = new Trip({
    name: req.body.tripname
  })
  res.render('trip/show', {
    title: trip.name + " " + trip.id,
    trip: trip
  })
};
