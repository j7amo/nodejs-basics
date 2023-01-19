const http = require('http');
const { createReadStream } = require('fs');

http
  .createServer((req, res) => {
    // we could've read the file synchronously, BUT:
    // - it will be a blocking operation;
    // - response size will equal to file size (which is bad for the user if the file is heavy)
    // AND WILL NOT BE IN CHUNKS!!!
    // const text = readFileSync('src/content/big.txt', 'utf8');

    // so instead we will be using streams
    const stream = createReadStream('src/content/big.txt', 'utf8');
    // we listen for stream to be ready
    stream.on('open', () => {
      // The "readable.pipe()" method attaches a Writable stream to the readable,
      // causing it to switch automatically into flowing mode and push all of its data
      // to the attached Writable (which is "res": ServerResponse in our case).
      // So basically we transfer data from Readable to Writable stream. Which is great
      // because it will be in CHUNKS!
      stream.pipe(res);
    });

    stream.on('error', (err) => {
      res.end(err);
    });
  })
  .listen(3333);
