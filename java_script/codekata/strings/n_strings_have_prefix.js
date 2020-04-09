/*Given N strings and a prefix string p. Find how many of the N strings have p as their prefix.
for eg: String[] input={'100','111','10100','10','1111'} prefix='10'
output=3*/
const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
});
inp.on("close",()=>{
    var b=a[1].split(" ");
    var c=a[2],d=[],w=0;
    
    for(var i=0;i<b.length;i++)
    {
        var d=[];
        var f=b[i].split("")
        for(var j=0;j<c.length;j++)
        {
            d.push(f[j]);
        }
        if(d.join("")==c)
        {
            w+=1;
        }
    }
    console.log(w);
})
