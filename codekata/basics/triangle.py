#to check the numbers form a triangle 
#function to find the triangle
def tri(a,b,c):
 #condition to check the sides form triangle
    if(a+b<=c) or (a+c<=b) or (b+c<=a):
    	return "no"
    else:
     return "yes"
#get the sides of the triangle from the user
x,y,z=map(int,input().split())
print(tri(x,y,z))
