//2.5 Find the datatype of author age in Nodejs Object.

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
    // function to find the type of the authordetails's age for nodejs 
    function type_of_age(a){
        // to print the type of the authordetails's age for nodejs
    console.log(typeof(library[1].authordetails.age));
    }
    //call the function type_of_age by passing the parameter library
    type_of_age(library);
    
