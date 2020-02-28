const readline = require('readline');
const inp = readline.createInterface({ 
  input:process.stdin
});
inp.on("line",(s)=>{
  s=s.replace(/\s+/g,"");
  console.log(s.length);
});
