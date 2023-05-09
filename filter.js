// const friends = ["armaan", "sazid", "salman", "sourov"];
// const evenFriend = friends.filter((x) => x.length % 2 === 0);
// console.log(evenFriend);

// let largestName = friends[0];

// friends.find((name) => {
//   if (name.length > largestName.length) {
//     largestName = name;
//   }
// });

// console.log(largestName);

//
//
//
//
//
//
//
//

class TeamMember {
  name;
  location;

  constructor(x, y) {
    this.name = x;
    this.location = y;
  }

  provideFeedback() {
    console.log(`${this.name} thank you for your feedback`);
  }
}

class Instructor extends TeamMember {
  designation = "web course instructor";
  team = "web team";

  constructor(x, y) {
    super(x, y);
  }

  startSession(time) {
    console.log(`start support session at ${time}`);
  }

  createQUIZ(module) {
    console.log(`create quiz for ${module}`);
  }
}

class Developer extends TeamMember {
  designation = "web Developer ";
  team = "web Developer";
  tech;
  constructor(x, u, technology) {
    super(x, u);
    this.tech = technology;
  }
  developFeature(feature) {
    console.log(`please develop the feature ${feature}`);
  }

  createQUIZ(version) {
    console.log(`please release the version ${version}`);
  }
}

class JobPlacement extends TeamMember {
  designation = "web Job Placement";
  team = "web Placement";
  region;
  constructor(x, l, region) {
    super(x, l);
    this.region = region;
  }
  developFeature(feature) {
    console.log(`please develop the feature ${feature}`);
  }

  createQUIZ(version) {
    console.log(`please release the version ${version}`);
  }
}

const Sazid = new Developer("soyeb sazid", "dhaka", "react");

console.log(Sazid);
Sazid.provideFeedback();

const sallman = new JobPlacement("MD salman", "khulna",'BD');
console.log(sallman);
//
//
//
//
//
//
//
//

// const armaan = new Instructor("amir", "mumbai");
// console.log(armaan);
