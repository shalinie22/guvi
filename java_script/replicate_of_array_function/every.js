// to find check whether the element in an array is greater than or equal to 18 
/*input:32 33 40
  output:true*/
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const a =[];
inp.on("line", (data) => {
  a.push(data);
});
inp.on("close",()=>{
    var b=a[0].split(" "),s=[];
    function everyfun(){
        for(var i=0;i<b.length;i++)
        {
             if(parseInt(b[i])>=18)
             {
                
                s.push(b[i])
             }
            
        }
        if(s.length===b.length)
        {
            return "true"
        }
        else
        {
            return "false"
        }
    }
    console.log(everyfun());
})
