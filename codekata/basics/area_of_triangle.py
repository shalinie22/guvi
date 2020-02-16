#to find the area of a triangle
#function to find area of a triangle
def tri(a,b):
#formula for area
    t=(a*b)/2
    r=round(t)
    return r
#get the input from the user
a,b=list(map(float,input().split()))
print(tri(a,b))
