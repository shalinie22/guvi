/*INPUT
3
OUTPUT
1
1 1 1
1 1 1 1 1*/
const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const a=[];
inp.on("line",(data)=>{a.push(data);});
inp.on("close",()=>{
    var b=parseInt(a[0]);
    var s=[];
    var c=1;
    var d=(b.length)-3;
    
    for(var i=1;i<=b;i++)
    {
        var s=[];
        for(var j=1;j<=c;j++)
        {   
            s.push("1");
            
        }
        console.log(s.join(" "));
        c+=2;
    }
});
