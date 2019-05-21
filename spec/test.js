/* eslint-disable no-undef */
const db = require('../db/index.js');

test('length of data', async () => {
  function callback(err, data) {
    expect(err).toBe(null);
    expect(data.length).toBe(5);
  }

  db.getAll(callback);
});
