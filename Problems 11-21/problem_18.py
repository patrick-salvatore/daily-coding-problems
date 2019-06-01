# Given an array of integers and a number k, where 1 <= k <= length of the array, 
# compute the maximum values of each subarray of length k.

arr = [10, 5, 2, 7, 8, 7]

def maxNumInSubarray(arr, k): 
    i = 0
    j = k
    n = len(arr) 
    outputArr = []


    while j < n+1: 
        maxNum = max([arr[x] for x in range(i, j)])
        outputArr.append(maxNum)
        i += 1
        j += 1
    
    print(outputArr)

maxNumInSubarray(arr, 3)