const add = (num1 , num2) => num1 + num2; // if use one line function dont need use return;
// console.log(add(12 , 12));

const multiply = (num1 , num2 , num3) => num1 * num2 * num3;
// console.log(multiply(1 , 2, 3));

const single = num => num * 1;
// console.log(single(10));

const noParameter = () => 'noman';
// console.log(noParameter());


// if use mutiple line on arrow function must need to use return 
const useMultipleLine = (num1 , num2) =>{ 
    const sum = num1 + num2;
    const minus = num1 - num2;
    const multiply = sum + minus;
    return multiply;
}
// console.log(useMultipleLine(5 , 3));