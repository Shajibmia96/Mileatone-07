const color= ["red" , "yellow" , "blue", "green" , "orange"]
const [color1 , color2 , color3] =color
// console.log(color1 , color2 , color3);


const student ={
    name:"Shajib",
    age: 21,
    skill:["Js" , "HTML" ,"CSS" , "Tailwind"]
};
const [fist , second] = student.skill;
// console.log(fist , second);

keys =Object.keys(student)
values = Object.values(student);
// console.log(keys , values)

const products = [
    {name:"phone" , price : 2433 , brand: "Samsung" },
    {name:"Laptop" , price : 2022 , brand: "lenavo" },
    {name:"watch" , price : 1590 , brand: "ray" },
    {name:"Monitor" , price : 1023 , brand: "acer" }
];

const remaining = products.filter(pn => pn.name !== "phone");
console.log(remaining)

const newProduct = {name:"Webcam" , price: 2312 , brand: "bita"};
const newProducts = [...products, newProduct];
// console.log(newProducts)