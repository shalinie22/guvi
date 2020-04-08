//Print the number of occurrences of K in N.If K is not found print '-1'.
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const a=[];
inp.on("line", (data) => {
 a.push(data);
});
inp.on("close",()=>{
     var b=a[0].split(" "),c=0;
     var k=parseInt(b[1]);
     var e=b[0].split("");
     for(var i=0;i<e.length;i++)
     {
         if(k==parseInt(e[i]))
         {
             c+=1;
         }
     }
     if(c>0)console.log(c);
     else console.log("-1")
})
