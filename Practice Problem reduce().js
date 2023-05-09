/*

1) You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method.

*/

const a = [1, 9, 17, 22];

const reduce = (a) => a.reduce((a, b) => a + b, 0);

console.log(reduce(a));

let sum = 0;
for (let i = 0; i < a.length; i++) {
  const num = a[i];
  sum = sum + num;
  
}

console.log(sum);
