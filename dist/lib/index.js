'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _apolloServerMicro = require('apollo-server-micro');

var _micro = require('micro');

var _microrouter = require('microrouter');

var _books = require('./schema/books.js');

var _books2 = _interopRequireDefault(_books);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var graphqlHandler = (0, _apolloServerMicro.microGraphql)({ schema: _books2.default });
var graphiqlHandler = (0, _apolloServerMicro.microGraphiql)({ endpointURL: '/graphql' });

exports.default = (0, _microrouter.router)((0, _microrouter.get)('/graphql', graphqlHandler), (0, _microrouter.post)('/graphql', graphqlHandler), (0, _microrouter.get)('/graphiql', graphiqlHandler), function (req, res) {
  return (0, _micro.send)(res, 404, 'not found');
});