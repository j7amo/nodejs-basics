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
    // "end" method MUST BE called ON EACH RESPONSE!!! It signals to the server that all the
    // response headers and body have been sent. And server should consider this message complete.
    // Because otherwise the browser will be waiting indefinitely for the server response...
    // "end" method accepts optional parameters:
    // - data - data to respond with(if specified then it is similar to
    // calling "res.write(data, encoding)");
    // - encoding - if we want to respond with a string, then we need to specify encoding;
    // - callback - function that is called when response stream finished.
    // if we pass all these parameters to "end" method then it is similar to calling:
    // "res.write(data, encoding)" and then "res.end(callback)"
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
