import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import MyComponent from './MyComponent';
const app = express();

function home(req, res){
  res.send(ReactDOMServer.renderToString(<MyComponent />));
}
app.get('/', home);

app.listen(3000);
