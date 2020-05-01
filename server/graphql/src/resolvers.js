const qldb = require('qldb').default;
const ionize = require('qldb').ionize;
const qldb_config = require('../config.js');
const QuantumClient = new qldb({
  accessKey:qldb_config.ACCESS_KEY_ID,
  secretKey:qldb_config.SECRET_KEY,
  region:qldb_config.REGION,
  ledger:qldb_config.LEDGER_NAME
});
const resolvers = {
  Query: {
    getMovies: async (parent, args) => {
      return await QuantumClient.execute('SELECT * FROM Movies');
    },
    getMovieByField: async (parent, args) => {
     return await QuantumClient.execute(`SELECT * FROM Movies AS m WHERE m.${args.filter.field} = '${args.filter.value}'`);
    }
  },
  Mutation: {
    addMovie: async(parent, args, { pubsub }) => {
      let movie = {
        name: args.name,
        producer: args.producer,
        rating: args.rating,
        rank: args.rank
      };
      await QuantumClient.execute(`INSERT INTO Movies ${ionize(movie)}`);
       pubsub.publish('notification', {
        notification:{
            event: 'New Movie Listed.',
            data: {response:`New Movie ${args.name} Added`}
        }
      })
     return ({response:`New Movie ${args.name} Added`})
    },
    updateMovie: async (parent, args,{ pubsub }) => {
         const response = await QuantumClient.execute(`UPDATE Movies AS m SET m.${args.updatingField} = '${args.updatingValue}' WHERE m.${args.filter.field}= '${args.filter.value}'`);   
       pubsub.publish('notification', {
        notification:{
            event: 'Movie Data Updated',
            data: {response:`Movie with ${args.filter.field} ${args.filter.value} Updated`}
             }
      }) 
      return ({response:`Movie with ${args.filter.field} ${args.filter.value} Updated`})
    },
    deleteMovie: async(parent, args, { pubsub }) => {
      const response = await QuantumClient.execute(`DELETE FROM Movies AS m WHERE m.${args.filter.field} = '${args.filter.value}'`);
     pubsub.publish('notification', {
        notification:{
            event: 'Movie Deleted',
            data: ({response:`Movie with ${args.filter.field} ${args.filter.value} Deleted Successfully`})
                 }
              })
     return ({response:`Movie with ${args.filter.field} ${args.filter.value} Deleted Successfully`})
   }
 },
   Subscription:{
    notification:{
      subscribe(parent, args, {pubsub}){
        return pubsub.asyncIterator('notification');
      }
    }
  }
 }
module.exports = resolvers;
