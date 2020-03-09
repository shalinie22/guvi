//to find the maximum number to be formed
const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const a=[];
inp.on("line",(data)=>{
  a.push(data);
});
inp.on("close",()=>{
  var n=a[0].split("");
    var b=n.sort();
    var s='';
    for(var i=b.length-1;i>=0;i--)
    {
        s+=parseInt(b[i])+"";
    }
    console.log(s);
    });
