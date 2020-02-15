#Find the length of its circumference.
#define the function for circumference
def circumference(r):
#formula for circumference
	c=2*22/7*r
	return c
#get the radius from the user
r=float(input())
#condition to check the radius from the user
if(r<0):
    print("Error")
 #else calculate the circumference
else:
    v=circumference(r)
    l=round(v,2)
    print(l,end="")
