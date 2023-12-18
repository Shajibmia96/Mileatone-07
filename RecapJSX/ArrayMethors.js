
const numbers = [32,42,52,63,35,2,52,52,76,89,43,90,11]
const getFilter = numbers.filter(p => p > 50);
// console.log(getFilter)

const getFind = numbers.find( p => p > 60)
// console.log(getFind)

const [a,b,c,d] = numbers;
// console.log(a , c,d,b)
const [,,,,,,,,nine] = numbers
// console.log(nine);


const makeArray =(num1,num2) =>{
    const result = [num1 ,num2];
    return result
};
 const [ x,y] = makeArray(34,12);

 console.log(y ,x)