const http = require('http');
const { listTribes } = require('./service');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  const tribes = await listTribes();

  console.log({tribes})

  res.end(JSON.stringify(tribes));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});