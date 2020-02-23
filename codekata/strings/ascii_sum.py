#string into ASCII values and print the sum of the numbers.
#get the input from the user
n=input()
#initialize the a to zero
a=0
for i in n:
 #find the ascii value of each value
    s=ord(i)
#sum the each of the value
    a=a+s
#print the output
print(a)
