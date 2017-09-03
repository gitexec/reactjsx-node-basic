'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _MyComponent = require('./MyComponent');

var _MyComponent2 = _interopRequireDefault(_MyComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

function home(req, res) {
  res.send(_server2.default.renderToString(_react2.default.createElement(_MyComponent2.default, null)));
}
app.get('/', home);

app.listen(3000);