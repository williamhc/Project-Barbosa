//requires
var assert = require("assert");
var express = require('express');
var app = require('../app.js');
var request = require('supertest');

describe('GET /trips/:badid', function(){
	it('should return json with a 500 error');
})

describe('POST /trips/create', function(){
	
	it('should respond with json', function(done){
		request(app)
			.post('/trips/create')
			.send({tripname: "TESTTRIP"})
			.set('Accept','application/json')
			.expect('Content-Type', /json/)
			.expect(200, done);
	})
});
