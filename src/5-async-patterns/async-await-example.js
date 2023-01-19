// this is just for getting the callback-based async functions:
// const { readFile, writeFile } = require('fs');

// this is one of the ways of getting built-in functions to return Promises
// const util = require('util');
//
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// this is another way of getting built-in functions to return Promises
const { readFile, writeFile } = require('fs').promises;

// './src/content/first.txt'
// 3 MAIN APPROACHES FOR WORKING WITH ASYNC CODE

// traditional CALLBACKS approach
// readFile('./content/first.txt', 'utf8', (err, result) => {
//   if (err) {
//     return;
//   }
//
//   const first = result;
//
//   readFile('./content/second.txt', 'utf8', (err1, result1) => {
//     if (err1) {
//       return;
//     }
//
//     const second = result1;
//
//     writeFile(
//       './content/result-async.txt',
//       `Here is the result: ${first}, ${second}`,
//       (err2) => {
//         if (err2) {
//           return;
//         }
//
//       },
//     );
//   });
// });

// PROMISES approach
// const getTextPromiseApproach = (path) => new Promise((resolve, reject) => {
//   readFile(path, 'utf8', (err, data) => {
//     if (err) {
//       reject(err);
//     } else {
//       resolve(data);
//     }
//   });
// });
//
// const writeTextPromiseApproach = (path, text) => new Promise((resolve, reject) => {
//   writeFile(path, text, (err, data) => {
//     if (err) {
//       reject(err);
//     } else {
//       resolve(data);
//     }
//   });
// });

// const firstFile = getTextPromiseApproach('./src/content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
//
// const secondFile = getTextPromiseApproach('./src/content/second.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
//
// writeTextPromiseApproach(
//   './src/content/result-async.txt',
//   `The result: ${firstFile} ${secondFile}`,
// )
//   .then(() => console.log('File written!'))
//   .catch((err) => console.log(err));

// ASYNC-AWAIT approach with custom-made Promise-based wrapper-functions
// const getTextAsyncAwaitApproach = async () => {
//   try {
//     const firstFile = await getTextPromiseApproach('./src/content/first.txt');
//     const secondFile = await getTextPromiseApproach('./src/content/second.txt');
//     await writeTextPromiseApproach(
//       './src/content/result-async.txt',
//       `The result: ${firstFile} ${secondFile}`,
//     );
//     console.log('File is written!');
//   } catch (err) {
//     console.log(err);
//   }
// };
//
// getTextAsyncAwaitApproach();

// ASYNC-AWAIT approach with built-in UTIL module's "promisify" method
// const getTextAsyncAwaitApproach = async () => {
//   try {
//     const firstFile = await readFilePromise('./src/content/first.txt', 'utf-8');
//     const secondFile = await readFilePromise(
//       './src/content/second.txt',
//       'utf-8',
//     );
//     console.log(firstFile, secondFile);
//     await writeFilePromise(
//       './src/content/result-async.txt',
//       `The result: ${firstFile} + ${secondFile}`,
//     );
//     console.log('File is written!');
//   } catch (err) {
//     console.log(err);
//   }
// };
//
// getTextAsyncAwaitApproach();

// ASYNC-AWAIT approach with built-in UTIL module's "promises" methods
const getTextAsyncAwaitApproach = async () => {
  try {
    const firstFile = await readFile('./src/content/first.txt', 'utf-8');
    const secondFile = await readFile('./src/content/second.txt', 'utf-8');
    console.log(firstFile, secondFile);
    await writeFile(
      './src/content/result-async.txt',
      `The result: ${firstFile} - ${secondFile}`,
      { flag: 'a' },
    );
    console.log('File is written!');
  } catch (err) {
    console.log(err);
  }
};

getTextAsyncAwaitApproach();
