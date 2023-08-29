const each = require('../each');

const items = [1, 2, 3, 4, 5];

//Callback function to pass in each
function cb(item, index) {
    console.log(`${item} is at ${index} index`);
}

each(items, cb);