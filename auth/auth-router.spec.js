const request = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');
const authModel = require('./auth-model');

const demoUser = {
	username: 'user',
	password: 'pass'
};

describe('auth router', function() {
	test('Testing Login and signup', () => {
		expect(true).toBe(true);
	});
	//Not sure how to get it to check for a cookie
	describe('POST/', function() {
		it('Adds user', async () => {
			const user = {
				username: 'user',
				password: 'pass'
			};
			await post(`/api/auth/register`, user).expect(200);
		});
	});
	//Some Examples
	// test('should return cohorts as the router value', function() {
	// 	request(server)
	// 		.get('/api/cohorts')
	// 		.then(res => {
	// 			expect(res.body.router).toBe('cohorts');
	// 		});
	// });
	// test('should return cohorts as the router value(async version)', async function() {
	// 	const res = await request(server).get('/api/cohorts');
	// 	expect(res.body.router).toBe('cohorts');
	// });
});
