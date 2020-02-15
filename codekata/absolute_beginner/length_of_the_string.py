# Remove all the whitespaces and find it's length
#define the function to remone the white space fro the string
def remove_space(a):
#use the replace function to remove the whitespaces
    return a.replace(" ","")
 #get the string from the user
a=input("")
#call the function remove_space
s=remove_space(a)
#print the output by using the len function 
print(len(s),end="")
