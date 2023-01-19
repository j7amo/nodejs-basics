const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request event');
  res.end('Hello world');
});

server.listen(3333, () => console.log('server is listening on PORT 3333'));
