#!/usr/bin/env node
'use strict';

var _index = require('../lib/index');

var _index2 = _interopRequireDefault(_index);

var _micro = require('micro');

var _micro2 = _interopRequireDefault(_micro);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _micro2.default)(_index2.default);
var port = 3000;
var host = '127.0.0.1';

server.listen(port, host, function () {
    console.log('mini-graphql-server http://' + host + ':' + port + ' ...');
});