//2.1 Update the count of Person 2 inside readers Array in Javascript;
//declare a json object named library
var library=[{
                "title":"javascript",
                "price": 500,
                "readers":[{
                            "name":"person1",
                            "count":300
                            },
                            {
                            "name":"person2",
                            "count":400
                            }],
                "authordetails":{
                                "name":"raj",
                                "age":40
                                }
            },
            {
                 "title":"nodejs",
                "price": 600,
                "readers":[],
                 "authordetails":{
                                "name":"raj",
                                "age":40
                                }
                
            }];
    //function named  to print the updated count of a person2
    function toupdatepersonson2count(a){
    //the count of the person2 is updated from 400 to 600
        library[0].readers[1].count=600
     // print the person2 updated count   
console.log(
    library[0].readers[1].count)
    }
    //call the function toupdatepersonson2count
    toupdatepersonson2count(library);
