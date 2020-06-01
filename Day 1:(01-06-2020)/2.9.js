//Print the count value of Person 2 in console.
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
    // function to find the count value of Person 2 
    function count(a){
        // to print the count value of Person 2
    console.log(library[0].readers[1].count);
    }
    //call the function count by passing the parameter library
    count(library);
    
