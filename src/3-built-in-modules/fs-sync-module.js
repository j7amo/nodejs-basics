// module enables interacting with the file system in a way modeled on standard POSIX functions
const { readFileSync, writeFileSync } = require('fs');
// THIS IS A SYNCHRONOUS APPROACH which is generally not good because
// files are read in synchronous manner then the script execution is BLOCKED for the duration
// needed for reading the files.
// So the order of console.logs is this:
// "start" => "done with file task" => "continue main script execution"
console.log('start');
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

// console.log(first, second); // first text file second text file

// - if the file is not yet created then it will be created by NodeJS;
// - if it exists already then NodeJS will overwrite it;
writeFileSync(
  './content/result-sync.txt',
  `Here is the result: ${first}, ${second}`,
  // inside options object we can for example set a value for "flag" property to "a"
  // if we want to append the result of writing the file
  { flag: 'a' },
);
console.log('done with file task');
console.log('continue main script execution');
