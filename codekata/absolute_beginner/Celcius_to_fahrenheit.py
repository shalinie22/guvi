#Write a program to convert this into Fahrenheit.
#function to find fahrenheit
def fahrenheit(c):
#formula to find fahrenheit
    f=c*1.8+32
 #round off the value to two decimal places
    fa=round(f,2)
    return fa
 #get the celcius from the user
a=float(input())
print(fahrenheit(a))
