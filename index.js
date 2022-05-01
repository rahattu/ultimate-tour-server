const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const cors = require('cors');
const app = express();
const port =process.env.PORT ||  5000;


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.msjpp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
 
async function run(){
try{
    await client.connect();
    console.log(" alhamdullilah  allah ");
}
finally{
    // await client.close();
}
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('kaj ki kore')
})

app.listen(port, () => {
  console.log(`go to the port server ${port}`)
})