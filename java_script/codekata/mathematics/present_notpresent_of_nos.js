//Print the occurrence of each number if present else “NOT PRESENT”
const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
});
inp.on("close",()=>{
    var d=parseInt(a[0]);
    var b=a[1].toString().split(" ");
    var p=parseInt(a[2]);
    var c=a[3].toString().split(" ");
    var n=0;
    var v=[];
    for(var i=0;i<c.length;i++)
    {
        n=0;
        for(var j=0;j<b.length;j++)
        {
            if(parseInt(c[i])==parseInt(b[j]))
            {
                n+=1;
            }
            else
            {
                continue;
            }
        }
        if(n>=1)
        {
            v.push(n);
        }
        else
        {
            v.push("Not Present");
        }
    }
    console.log(v.join(" "));
});
