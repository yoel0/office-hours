function printName() {
  return "Peach Bottomz";
}

console.log(printName());

// parameter
const nbaTeams = ["Bucks", "Rocketz", "Lakers", "Warriors"];
const nflTeams = ["Patriots", "Eagles", "Falcons", "Ravens"];
const soccerTeams = ["Galaxy", "West Ham", "Arsenal", "Pink Ponies"];
// console.log(nbaTeams[0]); // Bucks
// console.log(nbaTeams[3]); // Warriors

// with Objects and Arrays use const
// use let if you want to change the element if you need too
// ask myself what datatype is this

function printTeams(array) {
  for (let i = 0; i < array.length; i++) {
    // "Bucks", "Rocketz", etc
    let eachTeam = array[i]; // Bucks
    console.log(eachTeam);
  }
}

// printTeams(nbaTeams);
// printTeams(nflTeams);
// printTeams(soccerTeams);

//
//function print7Teams(teamsArray) {
//  for (let i=0; i < array.length; i++) {
//   let eachTeam = teamsArray[i];
//    console.log(eachTeam);
//    if (eachTeam === 'Lakers') {
//      return eachTeam;
//    }
//  }
//}

//print7Teams(nbaTeams);

// make a variable that returns a result based off a light

let light = "yellow";
function stopLight(string) {
  if (string === "green") {
    console.log("Go!");
  } else if (string === "yellow") {
    console.log("Slow down!");
  } else if (string === "red") {
    console.log("Stop!");
  }
}

stopLight("yellow");
stopLight("red");
stopLight("green");

const sei713 = {
  name: "Lulu Ironhammer",
  name: "Yummy Tumchilla",
  dancers: ["Silky Marshmellow", "Spicy Cinnamun"],
  theHiddenOnes: {
    ninja: "Wasabi Gingeria",
    soldier: "Karma",
  },
  print: function () {
    console.log("No fkin way there's a function in my object and it works.");
  },
};

sei713.print();
