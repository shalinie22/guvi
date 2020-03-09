const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const a=[];
inp.on("line",(data)=>{
  a.push(data);
});
inp.on("close",()=>{
    var e=a[0].split(" ");
    var k=parseInt(e[1]);
	var el=a[1].split(" ");
	var c=1;
    for(var i=0;i<el.length;i++)
    {
        if(k==el[i])
        {
            c=0;
            break;
        }
    }
    if(c==0)
    {
        console.log("yes");
    }
    else
    {
        console.log("no");
    }
});
