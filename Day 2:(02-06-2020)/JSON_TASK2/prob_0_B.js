// Problem 0 : Part B

/*1. Loop over the accidents array. Change atFaultForAccident from true to false.
2. Print the dated of my accidents*/
var myCar = {
 make: "Bugatti",
 model: "Bugatti La Voiture Noire",
 year: 2019,
 accidents: [
 {
 date: "3/15/2019",
 damage_points: "5000",
 atFaultForAccident: true
 },
 {
 date: "7/4/2022",
 damage_points: "2200",
 atFaultForAccident: true
 },
 {
 date: "6/22/2021",
 damage_points: "7900",
 atFaultForAccident: true
 }
 ]
};
//function to find the date and to update the atFaultForAccident to false
function accidents_and_date(myCar){
//for loop to iterate the object mycar
for(var i in myCar)
{
    var key=i
    //for loop to iterate the key i
    for(var j in i)
    {
    //to print the updated atFaultForAccident as false
        console.log(myCar.accidents[j].atFaultForAccident=false);
        // to print the date of the accidents
        console.log(myCar.accidents[j].date)
        
    }
}
}
// call the function myCar
accidents_and_date(myCar);
