// Problem 0 : Part A
var cat = {
 name: "Fluffy",
 activities: ["play", "eat cat food"],
 catFriends: [
 {
 name: "bar",
 activities: ["be grumpy", "eat bread omblet"],
 weight: 8,
 furcolor: "white"
 }, 
 {
 name: "foo",
 activities: ["sleep", "pre-sleep naps"],
 weight: 3
 }
 ]
};

// Problem 0 : Part A - 1

//Add height and weight to Fluffy

//asign weight of the cat as 4
cat.weight=4
//asign height of the cat as 5
cat["height"]=5;
//cat.push("height":5)
//print the cat with its height and weight
console.log(cat)

// Problem 0 : Part A - 2

//Fluffy name is spelled wrongly. Update it to Fluffyy

//update the cat name as Fluffyy
console.log(cat.name="Fluffyy")

// Problem 0 : Part A - 3

//List all the activities of Fluffyy’s catFriends.

console.log(cat.catFriends[0].activities)
console.log(cat.catFriends[1].activities)


// Problem 0 : Part A - 4

//Print the catFriends names.

console.log(cat.catFriends[0].name)
console.log(cat.catFriends[1].name)


// Problem 0 : Part A - 5

//Print the total weight of catFriends

console.log(cat.catFriends[0].weight+cat.catFriends[1].weight)


// Problem 0 : Part A - 6

//Print the total activities of all cats (op:6)

console.log(cat.activities.length+cat.catFriends[0].activities.length+cat.catFriends[1].activities.length)


// Problem 0 : Part A - 7

//Add 2 more activities to bar & foo cats

cat.catFriends[0].activities.push("play","sleep")
cat.catFriends[1].activities.push("play","eat")
console.log(cat.catFriends[0].activities)
console.log(cat.catFriends[1].activities)


// Problem 0 : Part A - 7

//Update the fur color of bar

console.log(cat.catFriends[0].furcolor="blue")

