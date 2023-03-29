
// MAP
const num = [34, 33, 23, 44];
console.log(num.map(Math.random));

// FILTER
const age = [34, 33, 23, 44];
console.log(age.filter(checkAdult));

 function checkAdult (age) {return age >=35} 

// REDUCE
 const ages = [345, 313, 23, 44, 78, 444, 27];
 console.log(ages.reduce(myFunc));

 function myFunc (total, ages) {

    return total - ages
 };