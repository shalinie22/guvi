/*1. Convert specifications given below in image to Javascript Object;
Link :
https://www.mohanbn.com/wp-content/uploads/2008/11/a-star-tech-specs.jpg*/
//function for the javascript_object
function javascript_object(){
  
    var technical_specifications=[{
                                "dimensions":{
                                               "overall_length(mm)":3500,
                                               "overall_width(mm)":1600,
                                               "overall_height(mm)":1490,
                                               "wheelbase(mm)":2360,
                                               "track_width":{
                                                                "front(mm)":1405,
                                                                "rear(mm)":1400
                                                            },
                                               "minimum_turning_radius(m)":4.5,
                                               "minimum_ground_clearance(mm)":170
                                            },
                                            
                                "capacities":{
                                                "sealing_capacity(persons)":5,
                                                "fuel_tamk_capacity(litres)":35
                                            },
                                            
                                "engine":{
                                                "type":"KB-series",
                                                "Number_of_cylinders":3,
                                                "Number_of_valves":12,
                                                "Capacity(cc/cm^3)":998,
                                                "Bore_X_stroke(mm)":"73.0*79.5",
                                                "Compression_ratio":"10:1",
                                                "Maximum_power(Ps/rpm)":"67/6,200",
                                                "Maximum_torque(Nm/rpm)":"90/3,500",
                                                "fuel_distribution":"multipoint_injection"
                                                
                                         },
                                "transmission":{
                                                "type":"5-speed_Mt"
                                                },   
                                "Chasis":{
                                            "steering":"rack&pinion,power assisted",
                                            "brakes":{
                                                                "front":"ventilated_dics",
                                                                "rear":"Drums"
                                                      },
                                            "suspension":{
                                                                "front":"MacPherson_strut& coil spring",
                                                                "rear":"Isolated trailing link & coil spring"
                                                      },
                                            "Shock absorbers":"gas_filled",
                                            "tyre(tubeless)":"155/80R13"
                                        },
                                "weights":{
                                            "Kerb weight(min, with full options)(kg)":"860-880",
                                            "Gross vehicle weight(kg)":1320
                                    
                                }}];

                                
console.log(technical_specifications);
}
javascript_object();
