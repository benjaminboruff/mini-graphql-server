[![Build Status](https://travis-ci.org/benjaminboruff/mini-graphql-server.svg?branch=master)](https://travis-ci.org/benjaminboruff/mini-graphql-server)

# mini-graphql-server: a command-line GraphQL server


`mini-graphql-server` is a simple, zero-configuration command-line GraphQL server.  It is to be used for testing, local development, and learning.

Currently, only a small sample of `books` are available to query by `author` and/or `title` via:

```
{
    books { 
        author 
        title 
    }
}
```

*Coming  soon*: schema, resolvers, and data file detection in a target directory.

#### Installation
> yarn global add mini-graphql-server

#### Usage

To start server:
> mini-graphql-server

To query:
* open browser to http://localhost:3000/graphiql

* or `curl -XPOST -H "Content-Type:application/json" -d '{"query": "{books { title author}}"}' http://localhost:3000/graphql`