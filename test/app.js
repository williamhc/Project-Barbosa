//requires
var assert = require("assert");
var express = require('express');
var app = require('../app.js');
var request = require('supertest');

describe('GET /', function(){
	it('should be return html', function(done){
		request(app)
			.get('/')
			.expect('Content-Type', /html/)
			.expect(200, done);
	})
})

describe('GET /NOTHINGHERE', function(){
	it('should return 404', function(done){
		request(app)
			.get('/NOTHINGHERE')
			.expect('Content-Type', /html/)
			.expect(404, done);
	})
})
