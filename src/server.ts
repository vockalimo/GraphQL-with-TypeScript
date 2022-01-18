// src/server.ts
console.log('Works!!')
import { environment } from './environment';
import { ApolloServer } from 'apollo-server';
import { schema } from "./schema";



const server = new ApolloServer({
  // 用 Node.js 的 fs 和 path 模組 來讀取我們的 schema 檔案
  schema,
  introspection: environment.apollo.introspection,
 // playground: environment.apollo.playground // apollo 3 eol 
});


server
  .listen(environment.apollo.port)
  .then(({ url }) => {
    console.log(`Server is running on ${url}`)
  });

// Hot Module Replacement
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => console.log('Module disposed. '));
}


/*
const typeDefs = async () = {
	await loadSchema('schema/*.graphql', {
  // load files and merge them into a single schema object
  loaders: [new GraphQLFileLoader()]
});
}
*/


//import { bookModel } from './model';

//const typeDefs = require('./schema')


/*
import { typeDefs } from './schema';
//import { resolvers } from './schema';


const server = new ApolloServer({
	schema:  makeExecutableSchema({
    typeDefs,
    resolvers,
})

});

server.listen().then(({ url }) => {
    console.log(`? Server ready at ${url}`)
});
*/
