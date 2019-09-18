const express = require('express');
const path = require('path');
const { highlight } = require('highlightjs');
const moment = require('moment');
require('moment/locale/ru');
moment.locale('ru');

const snippets = require('./data/snippets.json');

const server = express();

server.set('view engine', 'pug');

server.use(express.static('public'));
server.use('/lib', express.static('node_modules'));

server.use(express.urlencoded({ extended: true }));

server.get('/', (req, res) => {
    res.render('index');
});

server.get('/snippets', (req, res) => {
    res.render('list', {
        title: 'Сниппеты',
        snippets,
        moment
    });
});

server.get('/snippets/:snippetId', (req, res) => {
    const snippet = snippets.find(s => s.id === req.params.snippetId);

    res.render('view', {
        title: snippet.filename,
        snippet,
        highlight,
        moment
    })
});

server.get('/snippets/:snippetId/update', (res, req) => {
    const snippet = snippets.find(s => s.id === req.params.snippetId);

    res.render('form', {
        title: snippet.filename,
        snippet
    })
});

server.listen(3000, () => console.log('Сервер запущен по адресу http://localhost:3000'));