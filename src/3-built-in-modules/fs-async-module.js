const { readFile, writeFile } = require('fs');

// THIS IS ASYNCHRONOUS APPROACH which is good because
// files are read in asynchronous manner, which means that the script execution
// is NOT BLOCKED for the duration needed for reading the files and NodeJS can do some other tasks.
// So the order of console.logs is this:
// "start" => "continue main script execution" => "done with file task"
// which IS DIFFERENT from synchronous approach and very useful.
console.log('start');
// some callback hell here...
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    return;
  }

  const first = result;

  readFile('./content/second.txt', 'utf8', (err1, result1) => {
    if (err1) {
      return;
    }

    const second = result1;

    writeFile(
      './content/result-async.txt',
      `Here is the result: ${first}, ${second}`,
      (err2) => {
        if (err2) {
          return;
        }

        console.log('done with file task');
      },
    );
  });
});
console.log('continue main script execution');
