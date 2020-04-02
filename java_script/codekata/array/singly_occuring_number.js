
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const a=[];
inp.on("line", (data) => {
  a.push(data);
});
inp.on("close",()=>{
    var b=parseInt(a[0]);
    var e=a[1].split(" ");
    for(var i=0;i<b;i++)
    {
        var c=0;
        for(var j=0;j<b;j++)
        {
            if(e[i]==e[j])
            {
                c+=1;
            }
        }
        if(c==1)
        {
            console.log(e[i]);
        }
    }
})
