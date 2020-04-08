
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const a=[];
inp.on("line", (data) => {
 a.push(data);
});
inp.on("close",()=>{
     var b=a[1].split(" "),d=[],c=0;
     var f=a[1].split(" ");
     for(var i=0;i<b.length;i++)
    {
        for(var j=0;j<i;j++)
        {
            if(b[i]==b[j])
            {
                d.push(b[j]);
                c+=1;
            }
        }
    }
    if(c>0)console.log(d.join(" "))
    else console.log("-1")
})
