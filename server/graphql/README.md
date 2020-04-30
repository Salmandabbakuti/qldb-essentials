### Amazon's QLDB With GraphQL Server Setup

#### Setup
>update ```.env``` file according to your QLDB Configuration
```
npm i
node server.js //go to http://localhost:4000 for GraphQL Playground

```
##### GraphQL Playground
<img align="center" src="https://github.com/Salmandabbakuti/qldb-essentials/blob/graphql/server/graphql/screen.png" width="90%">

####  Queries and Mutations:
```
#getall

query{
 getMovies{
   name
   producer
   rating
   rank
 }
}

#get movie by field

query{
 getMovieByField(filter:{field:"producer",value:"Gale Anne Hurd"}){
   name
   producer
   rating
   rank
 }
}


#create

mutation{
  addMovie(name:"Terminator2", producer:"Gale Ann Hurd",rating:8.1, rank:44){
  response
  }
}

#update

mutation{
  updateMovie(filter:{field:"name",value:"Terminator2"},updatingField:"producer", updatingValue:"Gale Anne Hurd"){
    response
  }
}


#delete

mutation {
  deleteMovie(filter:{field:"name",value:"Terminator2"}){
    response
  }
}

# Subscriptions

subscription{
  notification{
    event
    data{
    response
    }
  }
}

>history of document can only be queried from AWS QLDB Console itself. it involves with nested objects. so graphql query implementation seems very complex for history.
```
