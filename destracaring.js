const mobile = {
    name: 'samsung j2 pro',
    price: 50000,
    specification: {
        ram: '2gb',
        rom: '6gb',
        display: {
            displayName: 'supper amulate',
            size: '6 inch'
        }
    }
};

console.log(mobile.name);
console.log(mobile.specification?.display.displayNames); // ? if pervious value is true

// destructuring
const {
    name,
    price
} = mobile; // mobile is a object and name , price is a object property

const {
    ram,
    rom,
    display
} = mobile.specification;
console.log(name, price, ram, rom, display);

// array destracsaring
const [brand , cost] = ['samsung' , 10000];
console.log(brand , typeof cost);