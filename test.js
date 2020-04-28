const qldb = require('qldb').default;

const QuantumClient = new qldb({
  accessKey:"",
  secretKey:"",
  region:"",
  ledger:"",
});
async function main(){
// Later in your code
const stuff = await QuantumClient.execute('SELECT * FROM Movies');
console.log(stuff)
}
main()
