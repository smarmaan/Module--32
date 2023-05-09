/*

Challenging Follow above array of objects. So, you have 3 objects as
array element. Can you find out the total sum from here?

20 + 15 + 22 = 57 . The output will be 57

What are you thinking? Yeah! Do it with for loop. I know you can do it.
But! Wait !! Wait !!! Do the same task using array.reduce() method.

*/

const peoples = [
  { name: "Meena", age: 20 },
  { name: "Rina", age: 15 },
  { name: "Shuchorita", age: 22 },
];

const ageSum = (x) => {
  const ageArray = [];
  for (const people of x) {
    ageArray.push(people.age);
  }

  return ageArray;
};

const a = ageSum(peoples);
console.log(a);

const b = a.reduce((a, b) => a + b, 0);
console.log(b);
