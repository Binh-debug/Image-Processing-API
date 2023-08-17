import Request from 'request';

describe('Server running ......', () => {
	let localServer: { close: () => void };
	beforeAll(() => {
		localServer = require('../index');
	});

	afterAll(() => {
		localServer.close();
	});

	describe('GET', () => {
		const data = {
			status: 0
		};
		beforeAll((done) => {
			Request.get(
				'http://localhost:3000/api/imgs?filename=encenadaport&width=400&height=200',
				(_, response) => {
					data.status = response.statusCode;
					done();
				}
			);
		});
		it('Status 200', () => {
			expect(data.status).toBe(200);
		});
	});
});
