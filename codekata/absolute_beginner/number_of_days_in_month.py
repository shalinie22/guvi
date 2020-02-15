#Print the number of days in the month corresponding to that number.
#define the function for month day
def month_day(m):
#condition to check the month for 31 days
    if(m==1 or m==3 or m==5 or m==7 or m==8 or m==10 or m==12):
        return '31'
#condition to check the month for 30 days
    elif(m==4 or m==6 or m==9 or m==11):
        return '30'
#condition to check the month for 28 days
    elif(m==2):
        return '28'
#orelse return error
    else:
        return'Error'
#get the month day from the user
m=int(input())
n=month_day(m)
#print the no of days 
print(n,end="")
