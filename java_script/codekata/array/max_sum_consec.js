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
 for(var i=0;i<b.length-1;i++)
 {
     
     var e=parseInt(b[i])+parseInt(b[i+1]);
     if(t<e)
     {
         t=e;
     }
    
 }
console.log(t); 
})
