const http = require('http');

// instead of defining "requestListener" here we can use Event Emitter API
// Why can we do it? Because "server" is an instance of "Server"
// that is an indirect child of "EventEmitter" class.
const server = http.createServer();
// we subscribe, listen and respond to "request" event (which is one of predefined values):
server.on('request', (req, res) => {
  res.end('Welcome');
});

server.listen(3333, () => console.log('server is running...'));
