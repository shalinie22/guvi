//check whether it contains only the characters 'a' and 'b' or only 'a' or only 'b'
const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
});
inp.on("close",()=>{
    var b=a[0].split("")
    var l=b.length,v=0;
    for(var i=0;i<l;i++)
    {
        if(b[i]=='a' || b[i]=='b')
        {
            v+=1
        }
    }
    if(l==v)
    {
        console.log("yes");
    }
    else
    {
        console.log("no")
    }
})
