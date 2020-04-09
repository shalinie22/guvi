const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
});
inp.on("close",()=>{
    var b=a[0].split("#");
    var ar=b[0];
    var c=a[1].split("#");
    var de=c[0];
    var arm=parseInt(b[1])+parseInt(b[2])+parseInt(b[3]);
    var dem=parseInt(c[1])+parseInt(c[2])+parseInt(c[3]);
    if(dem>arm)
    {
        console.log(de);
    }
    else
    {
        console.log(ar);
    }
    
});
