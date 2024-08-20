/*
 * back/app.js
 * @description :: to start server, run `node app.js` or `npm run start`
 */

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());

// public archives
app.use(express.static('public'))

// response handler middleware
// app.use(require('./utils/response'));

// Rotas
const routes = require('./routes')
app.use(routes);

app.listen(port, () => {
    console.log('Server listening on port ' + port);
});