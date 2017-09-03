'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _MyComponent = require('./react_files/MyComponent');

var _MyComponent2 = _interopRequireDefault(_MyComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.set('view engine', 'ejs');
app.use(_express2.default.static(__dirname + '/public'));

app.get('/', function (req, res) {
  var markup = _server2.default.renderToString(_react2.default.createElement(_MyComponent2.default, { name: 'master ro' }));
  res.render('index', { markup: markup });
});

app.listen(3000);