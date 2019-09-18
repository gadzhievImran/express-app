const express = require('express');
const snippets = require('./data/snippets.json');

const server = express();

server.set('view engine', 'pug');

server.use(express.static('public'));
server.use(express.urlencoded({ extended: true }));

server.get('/', (req, res) => {
    res.render('index');
});

server.get('/snippets', (req, res) => {
    res.render('list', {
        snippets
    });
});

server.listen(3000, () => console.log('Сервер запущен по адресу http://localhost:3000'));