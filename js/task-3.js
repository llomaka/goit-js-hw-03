"use strict";

const findBestEmployee = function(employees) {
    let bestKey;
    let bestValue = 0;
    for (const key of Object.keys(employees)) {
        if (bestValue < employees[key]) {
            bestKey = key;
            bestValue = employees[key];
        }
    }
    return bestKey;
};


console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux