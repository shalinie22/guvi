#right angled triangle
#function to find the right angle triangle
def rat(a,b,c):
#formula to find the third side squared
	s=(a**2)+(b**2)
#condition to check whether s and third side squared are equal
	if((c**2)==s):
		return "yes"
	else:
		return "no"
#get the sides of the triangle from the user
a,b,c=map(int,input().split())
print(rat(a,b,c))
