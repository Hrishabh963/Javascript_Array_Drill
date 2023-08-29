const map = require('../map');

const items = [1, 2, 3, 4, 5, 5]

//Callback function to pass in map
function cb(item, index) {
    return item + index;
}

const result = map(items, cb);
console.log(result);