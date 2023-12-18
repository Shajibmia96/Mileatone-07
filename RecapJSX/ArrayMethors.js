
const numbers = [32,42,52,63,35,2,52,52]
const getFilter = numbers.filter(p => p > 50);
console.log(getFilter)

const getFind = numbers.find( p => p > 60)
console.log(getFind)

const [a,b,c,d] = numbers;
console.log(a , c,d,b)