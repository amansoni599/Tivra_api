const graphql = require('graphql');
const _ = require('lodash');
const users=require('../model/tivra');

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


//MongoDB Model 
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: ( ) => ({
       
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        age: { type: GraphQLString },
        phone: { type: GraphQLString }
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
        },

        // user schema 
        user: {
            type: new GraphQLList(UserType),
            
            resolve(parent, args){
                
                return users.find({});
            }
        }

    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,

   
});