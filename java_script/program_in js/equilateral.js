const readline=require('readline');
const inp = readline.createInterface({
  input:process.stdin
});
inp.on ("line",(s)=>{
  var p=parseInt(s);
  var a=(Math.sqrt(3)/4)*(p*p);
  console.log(a.toFixed(2));
});
