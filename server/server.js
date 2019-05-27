const appCreator = require('./app.js');
const mysqlConnection = require('../db/conn.js');

// eslint-disable-next-line no-console
const app = appCreator.createApp(mysqlConnection);
app.listen(8080, () => console.log('Listening on port: 8080'));
