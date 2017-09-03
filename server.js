import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import MyComponent from './react_files/MyComponent';
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  let markup = ReactDOMServer.renderToString(<MyComponent name="master ro"/>);
  res.render('index', {markup});
});

app.listen(3000);
