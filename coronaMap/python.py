# cook your dish here
import math
n = int(input())
a = list(map(int,input().split()))
maximumSpecialSum = 0
num = math.floor(n**0.5)
if num**2 != n:
    num += 1

for i in range(n):
    
    if num*(num+1)//2 <= n-i:
        number2 = i + num*(num+1)//2
    else:
        num -= 1
        number2 = i + num*(num+1)//2

    print(a[i:number2])
    # specialSum = sum(a[i:number2])
    # if maximumSpecialSum < specialSum:
        # maximumSpecialSum = specialSum

# print(maximumSpecialSum)