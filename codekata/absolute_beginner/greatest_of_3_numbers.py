#Print the largest amongst these three numbers.
#function to find the greatest three numbers
def greatest(f,s,t):
#condition to check f the greatest no
    if((f>s) and (f>t)):
        return f
 #condition to check s the greatest no
    elif ((s>t) and (s>f)):
        return s
 #else return the value of t
    else:
        return t
 #get the value of three numbers
num1=int(input(""))
num2=int(input(""))
num3=int(input(""))
#call the function and store the result in res
res=greatest(num1,num2,num3)
#print the greatest number
print(res,end="")
