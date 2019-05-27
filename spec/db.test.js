/* eslint-disable no-undef */
const dbModels = require('../db/models.js');

const mockConnection = {};

test('mock connection', () => {
  mockConnection.query = (query, callback) => {
    callback('error', null);
  };
  dbModels.getAll(mockConnection, (err, data) => {
    expect(err).toBe('error');
    expect(data).toBe(undefined);
  });

  mockConnection.query = (query, callback) => {
    callback(null, [1, 2, 3]);
  };
  dbModels.getAll(mockConnection, (err, data) => {
    expect(err).toBe(null);
    expect(data).toStrictEqual([1, 2, 3]);
  });
});

test('mock addHouse', () => {
  mockConnection.query = (query, [arr], callback) => {
    expect(query).toBe('INSERT INTO homes (img, house_type, location, description, cost_per_night, rating, votes) VALUES ?');
    expect(arr).toStrictEqual([['path.jpg', 'house', 'Berlin', 'sunny house', 245, 4.5, 177]]);
    callback(null);
  };
  dbModels.addHouse(mockConnection, [['path.jpg', 'house', 'Berlin', 'sunny house', 245, 4.5, 177]], (err, data) => {
    expect(err).toBe(null);
  });
});
