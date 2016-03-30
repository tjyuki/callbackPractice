
/////////////////////CALLBACKS///////////////////

function makeSandwich(doneCallback) {
  console.log("Making a sandwich...");
  setTimeout(function() {
    doneCallback();
  }, 2000)
}

var sandwichCallback = function() {
  console.log("So yummy!");
}

makeSandwich(sandwichCallback);

/////////////////////////////////////////

var data = [1,2,3,4,5];

_.each(data, function(item) {
  item = item + 5;
  console.log(item)
})

var cars = [
  "bmw",
  "mercedes",
  "toyota"
]

var transformers = _.map(cars, function(item) {
  return {
    orgiinalCar: item,
    transformerName: item + " prime"
  }
})

console.log(transformers);

//////////////////////////////////////

var names = [
  {
    first: "Jeremy",
    middle: "M",
    last: "Robertson"
  },
  {
    first: "Big",
    middle: "",
    last: "Bird"
  },
  {
  first: "John",
  middle: "B",
  last: "Jovi"
  }
]

var mergedNames = _.map(names, function(nameObj){
  return nameObj.last + ", " + nameObj.first + " " + nameObj.middle;
})

console.log(mergedNames);

/////////////////////////////////////

var newNames = [];
for (var i = 0; i < names.length; i++){
  var nm = names[i];
 console.log(nm.first)

  newNames.push(nm.last + ", " + nm.first + " " + nm.middle);
}

console.log(newNames);


////////////PROTOTYPES///////////////////

// constructor function name MUST be capitalized
var Animal = function(name, sound, diet, species) {
  // this = {}
  this.name = name;
  this.sound = sound;
  this.diet = diet;
  this.species = species;
  // return this
};

Animal.prototype.makeSound = function() {
  console.log(this.species + " says " + this.sound);
}



var animalData = [ {
  name: "Bobo",
  sound: "Oooo",
  diet: "bugs, bananas",
  species: "Monkey"
}, {
  name: "Charles", sound: "rmfff", diet: "Peanuts, hay", species: "Elephant"
}, {
  name: "Steve", sound: "squak", diet: "bugs, fish", species: "Flaminco"
}]

var bobo = new Animal(animalData[0].name, animalData[0].sound, animalData[0].diet, animalData[0].species);


var animalObjects = _.map(animalData, function(animalInfo) {
  return new Animal(animalInfo.name, animalInfo.sound, animalInfo.diet, animalInfo.species);
})

console.log(animalObjects)

////////////////////////////////////////

String.prototype.mrT = function() {
  return "I pity the fool that says: " + this;
}

var soccer = "I like soccer";

var soccer2 = soccer.mrT();

console.log(soccer2);


////////////////REVIEWS-Functions + Objects//////////

var bands = [
 {
   name: "Joe",
   email: "Joe@Icansingreallyhigh.com",
   artist: "Queen"
 },
 {
   artist: "LedZepplin",
   email: "DeadMepplin@gmail.com",
   name: "Dead Mepplin"
 },
 {
   artist: "DavidBowie",
   name: "Johnny Depp",
   email: "Imnotreallyhim@johnnydeppfan.com"
 },
 {
   name: "Joe",
   email: "Joe@Icansingreallyhigh.com",
   artist: "Queen"
 },
 {
   artist: "LedZepplin",
   email: "DeadMepplin@gmail.com",
   name: "Dead Mepplin"
 },
 {
   artist: "DavidBowie",
   name: "Johnny Depp",
   email: "Imnotreallyhim@johnnydeppfan.com"
 },
 {
   name: "Joey",
   email: "Joe@Icansingreallyhigh.com",
   artist: "BritneySpears"
 },
 {
   artist: "LedZepplin",
   email: "DeadMepplin@gmail.com",
   name: "Dead Mepplin"
 },
 {
   artist: "DavidBowie",
   name: "Johnny Mepp",
   email: "Imnotreallyhim@johnnydeppfan.com"
 },
  {
   artist: "DavidBowie",
   name: "Johnny Gepp",
   email: "Imnotreallyhim@johnnydeppfan.com"
 },
  {
   artist: "DavidBowie",
   name: "Johnny Smepp",
   email: "Imnotreallyhim@johnnydeppfan.com"
 }
];

function countCoverBands(coverRequests) {

 var bands = {};
//   var artist =
//   var artistCount
 for (var i = 0; i < coverRequests.length; i++) {
   var request = coverRequests[i];
   if (bands.hasOwnProperty.artist){
     bands[request.artist] += 1;
   } else
     bands[request.artist] = 1;
}
return bands;
}

var totalResults = countCoverBands(bands);

console.log("total", totalResults);

/////////////////////////////////////////

function countCoverBands2(coverRequests){
  var bands = []

  for(var i = 0; i < coverRequests.length; i++){
    var request = coverRequests[i];

    var existingBand = null;
    for(var j = 0; j < bands.length; j++){
        if(bands[j].artist === request.artist){
            existingBand = bands[j];
            break;
        }
    }

    if(existingBand){
        existingBand.count += 1;
    } else {
        bands.push({
            artist: request.artist,
            count: 1
        });
    }
  }

  return bands;
}

/////////////CLOSURES//////////////////////

function makePaintCanFactory(colorName) {
  function makePaintCan(){
    console.log("Here is a " + colorName + " paint can.");
  }
  return makePaintCan;
}

var redPaintCanFactory = makePaintCanFactory("red");
var bluePaintCanFactory = makePaintCanFactory("blue");
var greenPaintCanFactory = makePaintCanFactory("green");

bluePaintCanFactory()
bluePaintCanFactory()
bluePaintCanFactory()
bluePaintCanFactory()

////////////////////////////////////////

function trackCalories() {
  //totalCalories today
  //totalCalories all time
  //personalBaselineCalories


  //addCalories()
  //startNewDay()
  //estimated weight loss today()
  //estimated weight loss all time()
}


function trackCalories(baselineCalories) {
  //totalCalories today
  var totalCaloriesToday = 0;
  //totalCalories all time
  var totalCaloriesAllTime = 0;
  //personalBaselineCalories
    //In the parameters
  var totalDays = 0;


  //addCalories()
  function reportEating(totalCaloriesConsumed){
    totalCaloriesToday += totalCaloriesConsumed;
  }
  //startNewDay()
  function startNewDay(){
    totalCaloriesAllTime += totalCaloriesToday;
    totalCaloriesToday = 0;
  }
  //estimated weight loss today()
  function getTodaysWeightLoss() {
    //3500Cal = 1lb
    //today - baseline / 3500
    return (totalCaloriesToday - baselineCalories) / 3500;
  }
  //estimated weight loss all time()
    function getAllTimeWeightLoss() {
    //3500Cal = 1lb
    //today - baseline / 3500
    return (totalCaloriesAllTime - (baselineCalories * totalDays)) / 3500;
  }

  return {
    reportEating: reportEating,
    startNewDay: startNewDay,
    getTodaysWeightLoss: getTodaysWeightLoss,
    getAllTimeWeightLoss: getAllTimeWeightLoss
  }
}

var wuansTracker = trackCalories(2300);
var pingsTracker = trackCalories(1800);
var sumoTracker = trackCalories(8500);

/////////////////////////////////////////////////////

var cat = {
  name: "Murloc",
  type: "Calico",
  weight: 34,
  mood: "grumpy",
  color: "snickers"
}

//Dot notation
//get - Not on the left side of a single equals
if (cat.weight > 17) {
  console.log(cat.weight);
}

var catWeight = cat.weight;

function checkCatWeight(cat.weight) {
console.log("Your cat weighs: " + weight)
}

//set - When on the left side of a single equals

cat.weight = 32;


//Bracket notation
//get
if (cat["weight"] > 17) {console.log(cat.weight);}
var weightProp = "weight";
if (cat[weightProp] > 17) {console.log(cat.weight);}

var catWeight = cat["weight"];

function checkCatWeight(weight) {
console.log("Your cat weighs: " + weight)
}

checkCatWeight(cat["weight"]);

//set
