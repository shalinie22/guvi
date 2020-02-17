#print the difference of number of ninjas between Kabali's clan
#and his opponent's clan. 
#function to find the difference
def diff(a,b):
#formula to find the difference
    d=b-a
    return d
#get the input from the user
a,b=list(map(int,input().split()))
print(diff(a,b))
