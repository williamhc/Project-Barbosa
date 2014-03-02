//requires
var assert = require("assert");
var express = require('express');
var app = require('../app.js');
var request = require('supertest');

describe('GET /trips/:badid', function() {
  it('should return json with a 500 error', function(done) {
    request(app)
      .get('/trips/:badid')
      .expect('Content-Type', /json/)
      .expect(500, done);
  })
})

describe('POST /trips', function() {
  it('should respond with json', function(done) {
    request(app)
      .post('/trips')
      .send({trip:{name: "TEST_TRIP"}})
      .set('Accept','application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
	})
});

describe('POST /trips/invalidLocation', function() {
  it('should return 404', function(done) {
    request(app)
      .post('/trips/invalidLocation')
      .send({trip:{name: "TEST_TRIP2"}})
      .set('Accept','application/json')
      .expect('Content-Type', /html/)
      .expect(404, done);
	})
});

describe('POST /api', function() {
  it('should return 404', function(done) {
    request(app)
      .post('/api')
      .send({trip:{name: "TEST_TRIP3"}})
      .set('Accept','application/json')
      .expect('Content-Type', /html/)
      .expect(404, done);
	})
});
