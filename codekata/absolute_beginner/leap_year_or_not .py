#to check whether this year is a leap year or not.
#define a function for leap year
def leap_year(y):
#condition to check leap year or not
    if(y%4==0):
#if yes return y
        return 'Y'
    else:
#if NO return N
        return 'N'
 #get the year from the user
y=int(input())
#call the function leap_year
o=leap_year(y)
print(o)
