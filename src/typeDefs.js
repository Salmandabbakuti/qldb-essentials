const typeDefs = `
   type Movie {
     name: String!
     producer: String!
     rating: Float!
     rank:Int!
   }
   type response{
     response:String!
   }
   type Query {
     getMovies: [Movie]
     getMovieByField(filter:filterInput!): [Movie]
   }
   input filterInput{
   field:String!
   value:String!
   }
   type Mutation {
     addMovie(name: String!, producer: String!, rating: Float!,rank:Int!):response
     updateMovie(filter:filterInput!, updatingField:String!, updatingValue:String!):response
     deleteMovie(filter:filterInput!):response
   }
   type Subscription {
        notification: notificationPayload
    }
    
    type notificationPayload {
        event: String!
        data: response!
    }
`
module.exports = typeDefs
