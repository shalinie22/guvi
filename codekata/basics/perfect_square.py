#to check whether is a perfect square
#function to check perfect square
def ps(a,b):
#product of the two inputs
    p=a*b
#condition to check the product and the square of ist input no 
    if(p==(a**2)):
    	return"yes"
    else:
    	return"no"
#get the input from the user
a,b=map(int,input().split())
print(ps(a,b))
