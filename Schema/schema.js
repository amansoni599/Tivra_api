const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema,GraphQLList } = graphql;

// dummy data
var books = [
    { name: 'Name of the Wind', genre: 'Fantasy', id: '1' },
    { name: 'The Final Empire', genre: 'Fantasy', id: '2' },
    { name: 'The Long Earth', genre: 'Sci-Fi', id: '3' },
];

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: ( ) => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: new GraphQLList(BookType),
            // args: { id: { type: GraphQLString } },
            resolve(parent, args){
                // code to get data from db / other source
                return books;
            }
        }
    }
});

// var queryType = new GraphQLObjectType({
//     name: 'Book',
//     fields: () => ({
  
//       book: {
//         type: new GraphQLList(book),
//         resolve: () =>book
//       }
//     })
//   });

module.exports = new GraphQLSchema({
    query: RootQuery,
   
});