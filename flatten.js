module.exports = function flatten(elements) {
    let flattened = [];
    for (let index = 0; index < elements.length; index++) {
        if (Array.isArray(elements[index])) {
            //if the element itself is array then we recursively call
            //the function with that element and concat the result
            flattened = flattened.concat(flatten(elements[index]));
        } else {
            flattened.push(elements[index]);
        }
    }
    return flattened;
}