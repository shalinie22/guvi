//2.3 Insert a new reader in the readers array for Nodejs.
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
    // function to insert new readers in the reader array for node js
    function to_insert_new_readers(a){
    //to push the new readers in the readers array
        library[1].readers.push({
                            "name":"person1",
                            "count":300
                            },
                            {
                            "name":"person2",
                            "count":400
                            })
   //to print the updated array                    
 console.log(library[1].readers) 
    }
    //call the function to_insert_new_readers by passing the parameter library
    to_insert_new_readers(library);
    
