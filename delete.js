const qldb = require('qldb').default;
const ionize = require('qldb').ionize;

const QuantumClient = new qldb({
  accessKey:"",
  secretKey:"",
  region:"",
  ledger:"",
});
async function main(){
const query = await QuantumClient.execute("DELETE FROM Movies AS m WHERE m.Producer = 'Christopher Nolan'");
console.log(query)
 }
  
main()
