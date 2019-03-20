/* #12
There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time. 
Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.

For example, if N is 4, then there are 5 unique ways

What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers X?
For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.
*/

function numWays(n, X) {
    let hash = [];
    hash[0] = 1;
    hash[1] = 1;

    if (n === 0 || n === 1) {
        return 1
    } else {
        for (var i = 2; i <= n; i++) {
            hash[i] = hash[i-1] + hash[i-2]
        }
    }
    return hash[n]
}

numWays(1)
numWays(2)
numWays(3)
numWays(4)

// fib(N) => return fib(N) = fib(N-1) + fib(N-2)