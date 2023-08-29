const flatten = require('../flatten');

const nestedArray = [1, [2],
    [
        [3]
    ],
    [
        [
            [4]
        ]
    ]
];

const flattened = flatten(nestedArray);
console.log(flattened);