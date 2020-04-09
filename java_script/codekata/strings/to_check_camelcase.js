const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
});
inp.on("close",()=>{
    var b=a[0],p=1,d=[],l=0;
    camelize = function camelize(b) {
      return b.replace(/\W+(.)/g, function(match, chr)
       {
            return chr.toUpperCase();
        });
    }
    if(camelize(b)==b)
    {
        console.log("yes")
    }
    else
    {
        console.log("no")
    }
})
