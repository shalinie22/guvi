
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
    var k=a[1].split(" ");
    var e=a[2].split(" ");
    var m=[...k,...e];
    var s=[]; 
    for(var i=0;i<m.length;i++)
    {
        for(var j=i+1;j<m.length;j++)
        {
            if(parseInt(m[i])>parseInt(m[j]))
            {
                var t=parseInt(m[i]);
                m[i]=parseInt(m[j]);
                m[j]=parseInt(t);
            }
        }
        s.push(parseInt(m[i]));
    }
    var d=s.length/2;
    console.log(s[d-1]+s[d]);
    
});
