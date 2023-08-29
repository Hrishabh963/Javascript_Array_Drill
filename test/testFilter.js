const filter = require('../filter');

const items = [1, 2, 3, 4, 5, 5];

//Callback function that checks for even values
function cb(item) {
    return item % 2 === 0 && item >= 2;
}

const result = filter(items, cb);
console.log(result);