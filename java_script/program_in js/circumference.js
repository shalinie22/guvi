const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
inp.on("line",(r)=>{
  var a=(2*(22/7)*(r));
  console.log(a.toFixed(2));
});
  
