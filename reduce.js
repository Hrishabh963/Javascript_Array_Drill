module.exports = function reduce(elements, cb, startingValue) {
    //Check whether starting value is undefined or not
    let result = startingValue !== undefined ? startingValue : elements[0];

    //If starting value is undefined,then skip through the first value as it is already added in result
    const startingIndex = startingValue !== undefined ? 0 : 1;

    for (let index = startingIndex; index < elements.length; index++) {
        result = cb(result, elements[index]);
    }
    return result;
}