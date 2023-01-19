// module provides utilities for working with file and directory paths
const path = require('path');

// platform specific separator
console.log(path.sep);

// Join all arguments together and normalize(remove any excessive characters) the resulting path.
const filePath = path.join(
  './content/',
  '//subfolder/////',
  '////test.txt////',
);
console.log(filePath);
// Return the last portion of a path
console.log(path.basename(filePath));
// construct an absolute path to the rightmost item passed
console.log(path.resolve(filePath));
