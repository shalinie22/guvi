// Find whether K exists and the number of time k repeats. If it does not exist just print no.
const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
});
inp.on("close",()=>{
    var b=a[1].split(" "),c=0;
    var y=a[0].split(" ");
    var k=parseInt(y[1]);
    for(var i=0;i<b.length;i++)
    {
        if(k==b[i])
        {
            c+=1;
        }
    }
    if(c>0)
    {
        console.log("yes",c);
    }
    else console.log("no");
})
