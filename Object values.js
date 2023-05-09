const student = {
  name: "Fredie",
  age: 26,
};

console.log(student.age);

let data = {
  location: [
    {
      latitude: "34.5,37.8",
      longitude: "98.77,58.7",
      city: "Hyderabad",
      country: "India",
    },
  ],
};

console.log(data.location[0].city);

/*

Console the value of email
● Console the value of address
● Console the value of city
● Console the value of lat
● Console the value of company name

*/

const data2 = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipCode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

console.log(data2.email);
console.log(data2.address);
console.log(data2.address.city);
console.log(data2.address.geo.lat);
console.log(data2.company.name);



