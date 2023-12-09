const rest =(...number) =>{
       let nums  = [];
    for(const num of number){
        const multiple = num *num
        nums.push(multiple)
    };
    return nums;
};
// console.log(rest(34,53,23,42,5));

const numbers = [25,144,16,49,12,45,21];
 const number = numbers.map(Math.sqrt);
//  console.log(number)

const ages = [32,42,12,42,45,24,101,26,20];
const great = ages.filter( age => age >= 20)
console.log(great);

const lessThen = ages.find( num => num>=100)
console.log(lessThen)
