//1 - Chunk

function chunk(array, size) {
   if(array.length <= size){
       return [array]
   }
   return [array.slice(0,size), ...chunkArray(array.slice(size), size)]
}
console.log(chunkArray([1,2,3,4,5,6],2))

//2-Compact

function compact(array){
var compact1=array.filter(function(s){
    return s>0
})
return compact1
}
console.log(compact([0,  1, false,  2,  '',  3]))


//3.FlatConcat

var arr = [[1],2, [3], [[4]]];
function flatenned2(arr){
var flatenned = arr.reduce(function(a,b){ return a.concat(b) },[]);

var flatenned1 = flatenned.reduce(function(a,b){ return a.concat(b) },[]);
return flatenned1
}
console.log(flatenned2(arr))


//4.Drop

function drop(array,size){
   return array. slice(size)
    //return dd
}
var array=[1,2,3,4]

console.log(drop(array,2))


//5 - dropRight

function dropri(array,a){
   return array. slice(0,array.length-a)
    //return dd
}
var array=[1,2,3,4]

console.log(dropri(array,1))


//6 -DropWhile

function dropwhile (num){

   var drop=num.filter(function(num){  if(num%2==0){}
       else return num
   })
    return drop
    
}
var num=[1,2,3,4,5,6]
console.log(dropwhile(num))

//7-LastIndex

function lastindex(array)
{
     var drop=array.filter(function(num){return num%2!=0})
    var l= drop;
     var lastele = l[l.length-1]
     return array.indexOf(lastele)
}

console.log(lastindex([1,2,3,4,5,6,7,8,9]))


//8-flattendeep

var arr = [1, [2, [3, [4]],  5]];
function flatdeep(arr){
var flatenned = arr.reduce(function(a,b){ return a.concat(b) }, []);

var flatenned1 = flatenned.reduce(function(a,b){ return a.concat(b) }, []);
var flatenned2 = flatenned1.reduce(function(a,b){ return a.concat(b) }, []);
return flatenned2
}
console.log(flattendeep(arr))

//9-flattendepth

var arr = [1, [2, [3, [4]],  5]];
function flattendepth(arr){
var flatenned = arr.reduce(function(a,b){ return a.concat(b) }, []);

var flatenned1 = flatenned.reduce(function(a,b){ return a.concat(b) }, []);
var flatenned2 = flatenned1.reduce(function(a,b){ return a.concat(b) }, []);
return flatenned2
}
console.log(flattendepth(arr))

//10-frompairs

function pairs(array){
    var obj=array.map(function(arr){
        var rv={};
    rv[arr[0]] = arr[arr.length-1];
        return rv
    })
    
    return obj
}
var a=[['a', 1], ['b', 2]];
console.log(pairs(a))
