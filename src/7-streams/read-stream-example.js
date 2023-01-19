// let's create a BIG file
const { writeFileSync } = require('fs');

for (let i = 0; i < 100000; i++) {
  writeFileSync('src/content/big.txt', `hello world ${i}\n`, { flag: 'a' });
}

// now if we want to read it we can use ReadStream
// 1) require factory function
const { createReadStream } = require('fs');

// 2) call it with mandatory "path" to the file that we want to read.
// - file is read in 64KB chunks by default;
// - last chunk is a buffer of remaining KB;
// We can also pass different options to set up a ReadStream. Some of them are:
// - { highWaterMark: 90000 } - size of a chunk;
// - { encoding: "utf8" } - if specified then the read result will be an encoded string;
const stream = createReadStream('src/content/big.txt', {
  highWaterMark: 90000,
});
// 3) subscribe to "data" event (which will be triggered every 64KB of data)
// and handle it:
stream.on('data', (result) => {
  console.log(result); // this logs 3 times because our file size is ~163KB
});

// 4) subscribe to "error" event and handle it:
stream.on('error', (err) => {
  console.log(err);
});
