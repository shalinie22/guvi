2.8. Print how many readers for javascript in console.
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
    // function to find the how many readers for javascript 
    function readers(a){
        // to print the how many readers for javascript
    console.log(library[0].readers.length)
    }
    //call the function readers by passing the parameter library
    readers(library);
    
