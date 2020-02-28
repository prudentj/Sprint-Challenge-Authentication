const request = require('supertest');
const server = require('../api/server');

describe('jokes router', function() {
	test('Testing should run', function() {
		expect(true).toBe(true);
	});
	describe('GET/', () => {
		test('should return 401 OK', function() {
			return request(server)
				.get('/api/jokes')
				.then(res => {
					expect(res.status).toBe(401);
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
});
