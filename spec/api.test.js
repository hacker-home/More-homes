/* eslint-disable no-undef */
const request = require('supertest');
const appCreator = require('../server/app.js');

describe('Test the root path', () => {
  test('It should response the GET method', () => {
    const mockConnection = {};
    mockConnection.query = (queryStr, callback) => {
      callback(null, [{ d: 2 }, { c: 7 }, { a: 1 }]);
    };

    const app = appCreator.createApp(mockConnection);
    return request(app).get('/MoreHomes').then((response) => {
      expect(response.statusCode).toBe(200);
      expect(response.body).toStrictEqual([{ d: 2 }, { c: 7 }, { a: 1 }]);
    });
  });
});
