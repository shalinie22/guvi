//total area and volume of a cuboid
const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const a=[];
inp.on("line",(data)=>{
  a.push(data);
});
inp.on("close",()=>{
    var f=parseInt(a[0]);
  var n=a[0].split(" ");
   var l=parseInt(n[0]);
   var b=parseInt(n[1]);
   var w=parseInt(n[2]);
   var vol=l*b*w;
   var area=(2*l*w)+(2*l*b)+(2*b*w)
   console.log(area,vol);
});
