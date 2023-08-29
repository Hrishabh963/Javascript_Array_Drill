const reduce = require('../reduce');

const items = [1, 2, 3, 4, 5, 5];

//Callback function for reduce,takes the result from previous callback as first argument
function cb(result, item) {
    return result + item;
}

const result = reduce(items, cb, 0);
console.log(result);