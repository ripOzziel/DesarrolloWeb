const array: (number | string)[] = [0,1,2,3,4,5];

const copyArray = [6, '7', 8,9,10];

console.log(array.push(...copyArray))
console.log(array)

