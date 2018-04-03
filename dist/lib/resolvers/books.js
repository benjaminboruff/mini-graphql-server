'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Some fake data
var _books = [{
  title: 'Harry Potter and the Sorcerer\'s stone',
  author: 'J.K. Rowling'
}, {
  title: 'Jurassic Park',
  author: 'Michael Crichton'
}];

// The resolvers
var resolvers = {
  Query: { books: function books() {
      return _books;
    } }
};

exports.default = resolvers;