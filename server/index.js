const express = require('express');
const bodyParser = require('body-parser');
const dbConnection = require('../db/conn.js');
const dataArr = require('./createData.js');
const dbModels = require('../db/models.js');

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../public/dist`));
const url = '/MoreHomes';
dbConnection.connect();

app.get(url, (req, res) => {
  // console.log(req.query.key);
  dbModels.getAll(dbConnection, (err, data) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(200).send(data);
    }
  });
});

app.post('/MoreHomes', (req, res) => {
  const data = dataArr.create();
  dbModels.addHouse(dbConnection, data, (err, result) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(201).send(result);
    }
  });
});
app.listen(port, () => console.log(`Listening on port: ${port}`));
