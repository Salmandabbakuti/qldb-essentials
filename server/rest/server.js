const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const qldb_config = require('./config.js');
const qldb = require('qldb').default;
const ionize = require('qldb').ionize;

const QuantumClient = new qldb({
  accessKey:qldb_config.ACCESS_KEY_ID,
  secretKey:qldb_config.SECRET_KEY,
  region:qldb_config.REGION,
  ledger:qldb_config.LEDGER_NAME
});

app.get('/api/readAll/', async function (req, res) {
    
try{
  const response = await QuantumClient.execute('SELECT * FROM Movies');
  res.send(response)
}catch (err) {
    res.status(500).send(err)
  }    
})
app.get('/api/search/', async function (req, res) {
    
try{
  const response = await QuantumClient.execute(`SELECT * FROM Movies AS m WHERE m.${req.query.searchField} = '${req.query.value}'`);
  res.send(response)
}catch (err) {
    res.status(500).send(err)
  }    
})
app.get('/api/searchById/', async function (req, res) {
    
try{
  const response = await QuantumClient.execute(`SELECT * FROM Movies AS r BY rid WHERE rid = '${req.query.id}'`);
  res.send(response)
}catch (err) {
    res.status(500).send(err)
  }    
})

app.post('/api/create/', async function (req, res) {
    
try{
const movie = req.body;
const response = await QuantumClient.execute(`INSERT INTO Movies ${ionize(movie)}`);
res.send(`Document Created.. ${response}`)
}catch (err) {
    res.status(500).send(err)
  }    
})
app.put('/api/update/', async function (req, res) {
    
try{
  const response = await QuantumClient.execute(`UPDATE Movies AS m SET m.${req.body.field} = '${req.body.value}' WHERE m.${req.body.filterField}= '${req.body.filterValue}'`);
  res.send(`Document Updated`)
}catch (err) {
    res.status(500).send(err)
  }    
})

app.delete('/api/delete/', async function (req, res) {
    
try{
const response = await QuantumClient.execute(`DELETE FROM Movies AS m WHERE m[${req.body.filterField}] = ${req.body.filterValue}`);
res.status(200).send("Deleted Document Successfully.")
}catch (err) {
    res.status(500).send(err)
  }    
})
app.get('/api/getHistory/', async function (req, res) {
    
try{
  const response = await QuantumClient.execute(`SELECT * FROM history(Movies) AS m WHERE m.data.${req.query.filterField} = '${req.query.filterValue}'`);
  res.send(response)
}catch (err) {
    res.status(500).send(err)
  }    
})
app.listen(3000, () => { console.log('Server is running at 3000..') });
