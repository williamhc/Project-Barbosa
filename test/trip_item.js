//requires
var assert = require("assert");
var should = require('should');
var express = require('express');
var TripItem = require('../models/TripItem');

describe('Trip items', function() {
  it('should have a name', function(done) {
    ti_name = "trip item name"
    ti = new TripItem({
      name: ti_name
    })
    assert.equal(ti.name, ti_name)
    done()
  })

  it('should have a updatedAt Date, defaulting to now', function(done) {
    now = new Date()
    ti = new TripItem()
    assert.equal(ti.updated.toISOString(), now.toISOString())
    done()
  })

  it('should have a scheduledAt Date, defaulting to null', function(done) {
    now = new Date()
    ti = new TripItem()
    assert.equal(ti.updatedAt, null)
    ti.updatedAt = now
    assert.equal(ti.updated.toISOString(), now.toISOString())
    done()
  })

  it('should have a location with a name, lat, and long', function(done) {
    loc = {
      name: "Takeoff from YWG",
      latitude: 49.89,
      longitude: -97.1,
    }
    ti = new TripItem({location: loc})
    ti.location.should.have.properties(['name', 'latitude', 'longitude'])
    done()
  })
})
