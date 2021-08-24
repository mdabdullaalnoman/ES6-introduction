const friends = ['noman' , 'fuyad' , 'nafim' , 'ayan' , 'mahi'];

// const friend = [];
// for( let i = 0; i < friends.length; i++){
//     const element = friends[i];
//     friend.push(element.length);
// }
// console.log(friend);

const friend = friends.map( frd => frd.length);
console.log(friend);


const products = [
    {
        name: 'mobile',
        price: 30000,
        brand: 'samsung'
    },
    {
        name: 'laptops',
        price: 30000,
        brand: 'asus'
    },
    {
        name: 'bags',
        price: 30000,
        brand: 'apox'
    },
];
const product = products.map(pd => pd.name);
// products.map(product => console.log(product)); if need can use return
products.forEach(product => console.log(product)); // different map and forEtch (foreach can not return)
console.log(product);