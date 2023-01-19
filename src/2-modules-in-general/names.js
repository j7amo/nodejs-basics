// local variable
const SECRET = 'SUPER SECRET';

// shared variables
const john = 'John';
const peter = 'Peter';

// console.log(module);
// module has a property by the name "exports" that we can populate with whatever we want to export
// and share with some other module
module.exports = {
  john,
  peter,
};

// we can also use alternative way of populating EXPORTS object by using "."/"[]" notation on it:
module.exports.somePropOne = 123;
module.exports.somePropTwo = 456;
