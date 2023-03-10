const typeDefs = `#graphql
 
    type User{
     _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [Book]
    },

    type Book{
    _id: ID
    authors: [String]
    bookId: String
    forSale: String
    link: String
    title: String
    },

    type Auth{
        token: ID!
        user: User
    },

    type Query {
        me: User
    }

    type Mutation{
        login(email:String!,password:String!):Auth
        addUser(username:String!, email:String!, password:String!):Auth
        saveBook(forSale:String!, bookId:String! ,link:String!, title:String!):Book
        removeBook(bookId:ID!):Book
    },

`;

module.exports = typeDefs;
