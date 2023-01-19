// module provides operating system-related utility methods and properties
// p.s. built-in modules DON'T start with "./"
const os = require('os');
// info about current user
console.log(os.userInfo());
// uptime of the system in seconds
console.log(os.uptime());

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freemem: os.freemem(),
};
console.log(currentOS);
