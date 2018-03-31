'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphqlTools = require('graphql-tools');

var _books = require('../resolvers/books');

var _books2 = _interopRequireDefault(_books);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The GraphQL schema in string form
var typeDefs = '\n  type Query { books: [Book] }\n  type Book { title: String, author: String }\n';

// Put together a schema
var schema = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: typeDefs,
  resolvers: _books2.default
});

exports.default = schema;