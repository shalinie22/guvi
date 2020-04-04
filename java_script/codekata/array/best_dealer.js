const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
});
inp.on("close",()=>{
    var b=a[1].split(" ");
    var r=parseInt(b[0]);
    var t=0;
 for(var i=0;i<b.length;i++)
 {
     if(r>parseInt(b[i]))
     {
         t=parseInt(i);
     }
 }
console.log("Dealer"+ t); 
})
