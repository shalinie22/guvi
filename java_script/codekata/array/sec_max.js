const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
});
inp.on("close",()=>{
    var b=a[1].split(" ");
    var r=parseInt(b[0]);
var n = b[0];
    for(var i=0;i<b.length;i++){
        if(parseInt(b[i])>r){
            n = r;
            r = parseInt(b[i]);
        }
        else if(parseInt(b[i])>n && parseInt(b[i])!=r)
            n = b[i];
    }
    
console.log(n);
    
})
