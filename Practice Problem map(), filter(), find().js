/*

1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number.

*/

const a = [1, 3, 5, 7, 9];

const even = (array) => array.map((x) => x + 1);

console.log(even(a));

/*

2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
return/get all the elements which are divisible by 10 using
array.filter() method.

*/

const b = [33, 50, 79, 78, 90, 101, 30];

const filtered = b.filter((x) => x % 10 === 0);

console.log(filtered);

/*

3) Now do the same task of question 2. But do this using array.find()
method. Then compare the output of question 2 & question 3.

*/

const c = [33, 50, 79, 78, 90, 101, 30];

const find = c.find((x) => x % 10 === 0);

console.log(find);
