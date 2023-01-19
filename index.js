const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const flattenItems = _.flattenDeep(items);
console.log(flattenItems); // [ 1, 2, 3, 4 ]
