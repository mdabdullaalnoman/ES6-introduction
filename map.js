const numbers = [12 , 32, 43, 34, 43];

//  function doubleIt(number) {
//     return number * 2
// };

const doubleIt = number => number * 2;

// 1. loop
// 2. element dia function k call
// 3. result k arry ar modde push

const double = [];
for (const number of numbers) {
    const multiply = doubleIt(number);
    double.push(multiply);
}

// const modernLoopThrough = numbers.map(doubleIt)
// const modernLoopThrough = numbers.map(x => x*2);
// const square = numbers.map(x => x*x);

console.log(square);