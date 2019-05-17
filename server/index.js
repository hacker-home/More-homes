/* eslint-disable no-console */
const express = require('express');
const db = require('../db/index.js');
const dataArr = require('./createData.js');

const app = express();
const port = 8080;

app.use(express.static(`${__dirname}/../public/dist`));

app.get('/more-homes', (req, res) => {
  db.getAll((err, data) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(200).send(data);
    }
  });
});
app.post('/more-homes', (req, res) => {
  const data = dataArr.create();
  db.addHouse(data, (err, result) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(201).send(result);
    }
  });
});
app.listen(port, () => console.log(`Listening on port: ${port}`));
