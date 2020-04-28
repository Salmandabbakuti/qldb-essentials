const qldb = require('qldb').default;
const ionize = require('qldb').ionize;

const QuantumClient = new qldb({
  accessKey:"",
  secretKey:"",
  region:"",
  ledger:"",
});
async function main(){
// Later in your code
const movie = { Name: 'Terminator2', Rating: '8.4', Rank: 33, Producer: "Gale Ann Hurd" };
const stuff = await QuantumClient.execute("UPDATE Movies AS m SET m.Rating = 9.0 WHERE m.Name= 'Interstellar'"); //query should be in double quotes where param string values should be in single quotes.
console.log(stuff)
}
main()
