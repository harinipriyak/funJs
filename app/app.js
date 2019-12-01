const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();

const routes = require('./routes/route');

app.engine('.html', exphbs({
  defaultLayout: 'layout',
  extname: '.html',
}));

app.set('view engine', '.html');

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/app', routes);

app.get('/app/*', async (req, res) => {
  return res.render('home');
});

module.exports = app;