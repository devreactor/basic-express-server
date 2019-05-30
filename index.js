const express = require('express');
const http = require('http');
const cors = require('cors');


const app = express();

app.use(cors());

app.get('/',(req,res) => {
  res.json({hello:'world'});
});

const port = process.env.PORT || 8080;
const server = http.createServer(app);

server.listen(port,() => {
  console.log('Express server listening on: ',port);
});
