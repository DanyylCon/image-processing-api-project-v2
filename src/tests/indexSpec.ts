import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
describe('Test endpoint responses', () => {
    it('Expect a 200 response for the root route', async () => {
        const response = await request.get('/');
        expect(response.statusCode).toBe(200);
    });
});
