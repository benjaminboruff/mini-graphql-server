#!/usr/bin/env node

import routes from '../lib/index';
import micro from 'micro';

const server = micro(routes);
const port = 3000;
const host = '127.0.0.1';

server.listen(port, host, ()=>{
    console.log(`mini-graphql-server http://${host}:${port}/graphiql ...`);
});