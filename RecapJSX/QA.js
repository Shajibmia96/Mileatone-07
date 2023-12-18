const name = 'Hero';
const age = 34;
const person = {name , age} ;
 console.log(person);

 const persons = { name : 'Babe' }
 console.log(persons["name"])

 const adventurer = { name: 'Alice',
                      cat: {name: 'Lucy'} };
const ratName = adventurer?.cat?.name;
console.log(ratName);

let f =null;
console.log(f ? f : "f is null");


const numbers = [21,54,35,24,25,61,32,52];
const result1 =numbers.filter(num => num <50);
console.log(result1);

const obj = {a:1};
console.log(Object.keys(obj).length===0);

