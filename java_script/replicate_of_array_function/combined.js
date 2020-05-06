/* To create a function which replicates the array functions of map,filter,every,sum,findIndex,concate
  input : 1 2 3 45 57 2 6 8
          45
  output : every : false
           filter : 45 57
           findIndex : 3
           map : 3 4 5 47 59 4 8 10
           sum : 124
           concat : 1 2 3 45 57 2 6 8 45
 */

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const a=[];
inp.on("line", (data) => {
  a.push(data)
});
inp.on("close",()=>{
    var b=a[0].split(" "),s=[];
    // to find check whether the element in an array is greater than or equal to 18 
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
    console.log("every : "+everyfun());
    //to filter the  given numbers in the array by checking it is greater than or equal to 18
    var d=[];
    function fil(){
        for(var i=0;i<b.length;i++)
        {
             if(parseInt(b[i])>=18)
             {
                 d.push(b[i])
             }
        }
        return d.join(" ") 
        
    }
    console.log("filter : "+fil());
    //to find the index of the element in the array
    var c=a[1]
    function index(){
        for(var i=0;i<b.length;i++)
        {
            if(b[i]==c)
            {
                return i;
            }
        }
        
    }
    console.log("findIndex : "+index());
    //to map the given aray elements so that each element get increased by 2
    var s=[];
    function mapping(){
        for(var i=0;i<b.length;i++)
        {
            var f=0;
            f=parseInt(b[i])+2;
            s.push(f)
        }
        return s.join(" ")
    }
    console.log("map : "+ mapping());
    //to find the sum of the given numbers in the array
    var s=0;
    function sumnum(){
        for(var i=0;i<b.length;i++)
        {
             s+=parseInt(b[i])
        }
        return s 
        
    }
    console.log("sum : "+sumnum());
    //concate the given strings
    var s=[];
    function con(){
        for(var i=0;i<a.length;i++)
        {
            s.push(a[i])
        }
        return s
    }
    var t=con();
    console.log("concat : " + t.join(" "));

})
