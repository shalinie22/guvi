Your task is to remove all the adjacent duplicate character from string.
const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
var S=data.split("");
  var s="";
  for(var i=0;i<S.length;i++)
  {
    if(S[i]==S[i+1]){
        S[i]="";
        S[i+1]="";
    }
  }
  console.log(S.join(""));
});
