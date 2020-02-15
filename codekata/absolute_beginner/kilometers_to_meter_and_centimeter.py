#Convert and print this value in meters and centimeters.
#define the function for conversion 
def conversion(kms):
#formula to convert kms to meter 
    m= kms*1000
    print(m)
#formula to convert kms to centimeter
    c= kms*100000
    print(c)
#get the input kilometer from the user
kms=int(input())
#call the function conversion
conversion(kms)
