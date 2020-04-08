
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const a=[];
inp.on("line", (data) => {
 a.push(data);
});
inp.on("close",()=>{
    var b=a[0].split(" "),k=0,l=[];;
    if(b[0]===b[1])
    {
        console.log("yes");
    }
    else
    {
        console.log("no");
    }
})
