let data = [
  { pHeroCourses: { "course-x": "web development" } },
  { pHeroCourses: { "course-y": "phitron" } },
  { pHeroCourses: { "course-z": "acc" } },
  {
    pHeroCourses: { "course-xyz": "level-2" },
    locationField: { "en-US": { lat: 19.28563, lon: 72.8691 } },
  },
];

// lon,level2

console.log(data[3].pHeroCourses["course-xyz"]);
console.log(data[3].locationField["en-US"].lon);

console.log(data[0].pHeroCourses['course-x']);

console.log(data[1].pHeroCourses['course-y']);

console.log(data[2].pHeroCourses['course-z']);

console.log(data[3].pHeroCourses['course-xyz']);
console.log(data[3].locationField["en-US"].lon);
console.log(data[3].locationField["en-US"].lat);








