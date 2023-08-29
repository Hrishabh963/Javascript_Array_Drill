const find = require('../find');

const items = [1, 2, 3, 4, 5, 5];

//Callback function that looks for value 5;
function cb(item) {
    return item === 5;
}

const result = find(items, cb);
console.log(result);