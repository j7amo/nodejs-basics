// this package is for using the HTTP server and client in NodeJS
// p.s. By the way ExpressJS is built on top of this package.
const http = require('http');

// we can create a server with "http.createServer" that accepts "requestListener" function
// that in turn has access to:
// - req - request object;
// - res - response object;
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Welcome to the homepage');
    res.end();

    // we need this return in order to get rid of "ERR_STREAM_WRITE_AFTER_END" error.
    // this error is thrown because at line 12 we ended writing to stream with "res.end()"
    // and on latter lines we are once again trying to write data to an ended stream with
    // "res.write()" and "res.end()" which is not allowed.
    // An alternative way is to use IF - ELSE IF - ELSE.
    return;
  }

  if (req.url === '/about') {
    res.write('We are a growing company and bla-bla-bla...');
    res.end();

    return;
  }

  // we can even return HTML in template literal:
  res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page that you are looking for</p>
        <a href="/">back home</a>
    `);
});

// and this is how to start the server and make it listen for the requests on the specific port
server.listen(3033);
