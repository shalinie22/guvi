# Find and print the smaller number.
#define the function to find the smallest no
def smallest (x,y):
#condition to find the smallest no
    if(x<y):
        return x
    else:
        return y
 #get the input from the user
x, y = input().split()
#call the function smallest 
s=smallest(x,y)
print(s)
