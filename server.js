const express =require('express');

const server = express();

server.set('view engine', 'pug');

server.use(express.static('public'));
server.use(express.urlencoded({ extended: true }));

server.get('/', (req, res) => {
    res.render('index');
});

server.listen(3000, () => console.log('Сервер запущен по адресу http://localhost:3000'));