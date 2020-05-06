//concate the given strings
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const a =[];
inp.on("line", (data) => {
  a.push(data);
});
inp.on("close",()=>{
    var s1=a[0]
    var s2=a[1],s=[];
    function con(){
        for(var i=0;i<a.length;i++)
        {
            s.push(a[i])
        }
        return s
    }
    var t=con();
    console.log(t.join(" "));
})
