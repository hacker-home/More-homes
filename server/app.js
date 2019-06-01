const compression = require('compression');
const express = require('express');
const bodyParser = require('body-parser');
const dbModels = require('../db/models.js');

const createApp = (dbConnection) => {
  const app = express();

  app.use(compression());
  app.use(bodyParser.json());
  app.use(express.static(`${__dirname}/../public/dist`));

  app.get('/MoreHomes', (req, res) => {
    dbModels.getAll(dbConnection, (err, data) => {
      if (err) {
        res.status(500).send();
      } else {
        res.status(200).send(data);
      }
    });
  });

  return app;
};

module.exports = {
  createApp,
};
