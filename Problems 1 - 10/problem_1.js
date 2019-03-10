/* #1 
Given a list of numbers and a number k, return whether any two numbers from 
the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
*/

function isSum(arr, k) {
    hashmap = {}

    for (let val of arr) {
        if (hashmap[val]) {
            return true
        } else {
            hashmap[k - val] = true
        }
    }
    return false;
}
