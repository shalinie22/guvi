#addition of two numbers
#function for addition
def addition(A,B):
	C=A+B
  #return the value of c
	return C
#get the two numbers for addition from the user
a=float(input(""))
b=float(input(""))
#call the function and store it in the variable s
s=addition(a,b)
#print the output 
print(round(s),end="")
