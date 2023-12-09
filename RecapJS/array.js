const products = [
    {name:"phone" , price : 2433 , brand: "Samsung" },
    {name:"Laptop" , price : 2022 , brand: "lenavo" },
    {name:"watch" , price : 1590 , brand: "ray" },
    {name:"Monitor" , price : 1023 , brand: "acer" }
]
const findBrandName = products.map(product => product.brand)
// console.log(findBrandName);
const totalPrice = products.map(total => total.price);
// console.log(totalPrice)

products.forEach(product => console.log(product));
products.forEach(product => console.log(product.name));

const lessThen = products.filter( product => product.price <= 2000);
// console.log(lessThen)
const specificName = products.filter(product => product.name.includes("n"));
console.log(specificName)
