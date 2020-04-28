const qldb = require('qldb').default;

const QuantumClient = new qldb({
  accessKey:"",
  secretKey:"",
  region:"",
  ledger:"",
});
async function main(){
const stuff = await QuantumClient.execute('SELECT * FROM Movies');
console.log(stuff)
}
main()
