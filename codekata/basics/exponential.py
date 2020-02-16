#find A^B.
#function to find the exponential
def exp(a,b):
 #formula to find the exponential
	d=a**b
	return d
#get the input from the user
a,b=list(map(int,input().split()))
print(exp(a,b))
