#Find the Simple interest and print it up to two decimal places.
#function for simple interest
def simple_interest(p,t,r):
#formula for simple interest
    s=(p*t*r)/100
    w=round(s,2)
    return w
 #get the input for principle,rate of interest,t=years
x,y,z = list(map(float, input("").split()))
print(simple_interest(x,y,z))
