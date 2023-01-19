const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Home Page');
    return;
  }

  if (req.url === '/about') {
    // here we deliberately introduce BLOCKING code.
    // If a user tries to visit "/about" page,
    // NOT ONLY he will have to wait for response for the duration
    // of this synchronous code to finish,
    // BUT also other requests from this user (let's say he tries to visit "/" in parallel)
    // OR requests from other users will also be blocked by this synchronous code!
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(i, j);
      }
    }
    res.end('About Page');
    return;
  }

  res.end('Error Page');
});

server.listen(3333, () => console.log('server is listening on PORT 3333'));
