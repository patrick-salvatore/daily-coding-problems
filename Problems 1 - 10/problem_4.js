/* #4
Given an array of integers, find the first missing positive integer in linear time and constant space. 
In other words, find the lowest positive integer that does not exist in the array. 
The array can contain duplicates and negative numbers as well.
For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.
*/

function findPosInt(arr) {
    sortedArr = arr.sort()

    // [1, 2, 0] --> [0, 1, 2]
    // [3, 4, -1, 1] --> [-1, 1, 3, 4]
    
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === i) {
            return arr[arr.length - 1] + 1;
        } else {
            for (var i = arr.length -1; i >= 0; i--) {
                if (arr[i] !== (i + 1)) {
                    return arr[i] + 1
                }
            }
        }
    }
}
