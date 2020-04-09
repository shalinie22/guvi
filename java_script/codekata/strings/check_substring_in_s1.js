//Your task is to check whether one of the string is substring of the other.If substring exists,then print the starting index of sub-string.
const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
});
inp.on("close",()=>{
    var b=a[0].split("")
    var c=a[1].split(""),f=0;
    for(var i=0;i<b.length;i++)
    {
        for(var j=0;j<c.length;j++)
        {
            if(b[i]==c[j])
            {
                f=1
                var k=i;
                break;
            }
        }
        if(f==1)break
    }
    if(f==1)console.log(k+1)
    else console.log("-1")
})
