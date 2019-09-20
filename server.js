const express = require('express');

const highlight = require('./util/highlight');
const moment = require('./util/moment');
const snippetRouter = require('./router/snippets');

const server = express();
server.locals.highlight = highlight;
server.locals.moment = moment;

server.set('view engine', 'pug');

server.use(express.static('public'));
server.use('/lib', express.static('node_modules'));
server.use(express.urlencoded({ extended: true }));

server.get('/', (req, res) => {
    res.render('index');
});

server.use('/snippets', snippetRouter);

server.listen(3000, () => console.log('Сервер запущен по адресу http://localhost:3000'));
