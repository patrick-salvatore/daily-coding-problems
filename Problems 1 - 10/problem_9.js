/* #8 
Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. 
Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, 
since we pick 5 and 5.
*/

function largestNonAdjSum(arr) {
   let incl = 0;
   let excl = 0;
   let new_excl

    for (var i = 0; i < arr.length; i++) {
        new_excl = excl > incl ? excl : incl
        incl = arr[i] + excl
        excl = new_excl
        console.log(new_excl,incl,excl)
    }

    return excl > incl ? excl : incl;

}
largestNonAdjSum([2, 4, 6, 2, 5])