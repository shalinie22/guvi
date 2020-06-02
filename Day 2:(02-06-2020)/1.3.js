/*1.3 Extract and print all the country name with alpha3Code and population in console.
(Example Output : Afghanistan : AFG and population is 27657145 )*/

//create a variable request 
var request= new XMLHttpRequest();
//command to  open the url 
                request.open('GET','https://restcountries.eu/rest/v2/all',true)
                //to load the data of the url
                request.onload=function(){
                // json variable stores the data of the url
                    var json=JSON.parse(this.response)
                    //console.log(json)
                    //to iterate the country name and its alpha3Code and population
                    for(var i in json)
                    {
                    // print the output
                       console.log(json[i].name+":"+json[i].alpha3Code+" and "+" population is "+json[i].population)

                   
                    }
                }
                //call the function request
                request.send();
