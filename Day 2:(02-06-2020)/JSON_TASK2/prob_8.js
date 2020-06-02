/*var ques = “What was your first pet’s name?”;
var ans  =  “DufferNutter”;
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status); // false*/

var securityQuestions = [
 {
 question: "What was your first pet’s name?",
 expectedAnswer: "FlufferNutter"
 },
 {
 question: "What was the model year of your first car?",
 expectedAnswer: "1985"
 },
 {
 question: "What city were you born in?",
 expectedAnswer: "NYC"
 }
];
var ques = "What was your first pet’s name?";
var ans  =  "FlufferNutter";
//function to check the questions 
function chksecurityQuestions(securityQuestions,ques,ans) {

 // iterate the securityQuestions
 for(var i in securityQuestions)
 {
   var key=securityQuestions[i]
//iterate the key
   for(var j in key){
     //console.log(key.question)
     //compare the questions ans answers
     if((key.question==ques)){
     if(key.expectedAnswer==ans)
     {
     //if same return true
       return true
     }
     }
     else
     {
     //orelse return false
       return false
     }
   }
   //console.log(key)
 }

 //return true 
}
//call the function
console.log(chksecurityQuestions(securityQuestions,ques,ans));
