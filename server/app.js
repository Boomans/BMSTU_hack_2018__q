'use strict';
const PORT = process.env.PORT || 8000;
const {isProd} = require('./utils/utils');

const express = require('express');
const bodyParser = require('body-parser');
const mustache = require('mustache');
const mustacheExpress = require('mustache-express');

const formBuildData = require('./middlewares/form-build-data');
const buildPage = require('./middlewares/build-page');

mustache.tags = ['{template:"', '"}'];
const paths = ['/'];

const app = express()
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))
    .get('/ping', (req, res) => {
        res.end();
    })
    .engine('mustache', mustacheExpress())
    .set('view engine', 'mustache')
    .set('views', __dirname + '/../client/pages/');

app.use('/build', express.static('build'));

app
    .get(paths, [formBuildData, buildPage])
    .use((req, res) => {
        res.sendStatus(404);
    })
    .use((err, req, res, next) => {
        res.sendStatus(500);
    });

const server = app.listen(PORT, () => {
    console.log(`Server listen ${PORT} port`);
});

module.exports = server;