const numbers = [12, 11, 33, 43, 53, 56];

const biggerThan30 = numbers.filter(num => num > 30); // filter only use of an array.
console.log(biggerThan30);


const players = [
    {
        name:'josim',
        cost: 4500
    },
    {
        name:'messi',
        cost: 500
    },
    {
        name:'naimar',
        cost: 5000
    },
];

// filter give me condition fulfil element in array. if not match on condition give emtey arry.
const supperPlayer = players.filter(player => player.cost > 500);
console.log(supperPlayer);

// find give me first element whitch condisiton fullfill , if condition not match give undefine
const longer500FirstElement = players.find(player => player.cost > 500);
console.log(longer500FirstElement);



