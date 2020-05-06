//to filter the  given numbers in the array by checking it is greater than or equal to 18
/*input:3 43 5 2 1 18 55
  output:43 18 55*/
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
    function fil(){
        for(var i=0;i<b.length;i++)
        {
             if(parseInt(b[i])>=18)
             {
                 s.push(b[i])
             }
        }
        return s.join(" ") 
        
    }
    console.log(fil());
})
