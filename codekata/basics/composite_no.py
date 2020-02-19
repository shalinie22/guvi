#composite number or not
#function to find the composite number
def composite(a):
#condition to check the number is greater than one
    if(a>1):
        for i in range(2,a//2+1):
            if(a%i==0):
                print("yes",end="")
                break
        else:
            print("no",end="")
    else:
        print("yes",end="")
#get the input from the user
a=int(input())
#call the function composite
composite(a)
