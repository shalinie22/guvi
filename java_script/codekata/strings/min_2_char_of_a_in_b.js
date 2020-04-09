const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
});
inp.on("close",()=>{
    var f=a[0].split(" "),p=0;
    var n=f[0];
    var r=f[1];
    for(var i=0;i<n.length;i++)
    {
        for(var j=0;j<r.length;j++)
        {
            if(n[i]==r[j])
            {
                p+=1;
            }
        }
    }
    if(p>=2)console.log("yes")
    else console.log("no")
});
