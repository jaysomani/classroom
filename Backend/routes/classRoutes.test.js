// server/routes/classRoutes.test.js
const request = require('supertest');
const app = require('../app'); // Import your Express app
const mongoose = require('mongoose');

beforeAll(async () => {
    await mongoose.connect('mongodb://localhost/testdb');
});

afterAll(async () => {
    await mongoose.connection.close();
});

test('GET /api/classes', async () => {
    const response = await request(app).get('/api/classes');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
});

test('POST /api/classes', async () => {
    const response = await request(app)
        .post('/api/classes')
        .send({ name: 'History' });
    expect(response.status).toBe(201);
    expect(response.body.name).toBe('History');
});
