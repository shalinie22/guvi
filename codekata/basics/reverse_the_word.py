# Function to reverse words of string 
def reverseWords(s): 
	# split words of string separated by space 
    s=s[-1::-1] 
	# now join words with space 
    output = ' '.join(s) 
    return output 
s = input().split()
print (reverseWords(s))

