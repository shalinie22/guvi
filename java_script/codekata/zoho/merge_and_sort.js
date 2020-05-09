//Given k sorted arrays of possibly different sizes, merge them and print the sorted output.
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const a=[];
inp.on("line", (data) => {
  a.push(data);
});
inp.on("close",()=>{
    var r=1,t=[]
    for(var i=0;i<a.length-1;i++ )
    {
        
        t.push(a[r])
        r++
    }
    var p=t.join(" ")
    var e=p.split(" ")
    var u=e.sort(function(a,b){
        return(a-b)
    })
    console.log(u.join(" "))
    
})
