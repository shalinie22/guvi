//Find out whether the person the warden suspects is present in the prison or not.
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const a=[];
inp.on("line", (data) => {
 a.push(data);
});
inp.on("close",()=>{
    var b=a[1].split(" "),c=0;
    var k=parseInt(a[2]);
    for(var i=0;i<b.length;i++)
    {
        if(k==b[i])
        {
            c=1;
        }
    }
    if(c==1)
    {
        console.log("yes");
    }
    else console.log("no");
})                                 
