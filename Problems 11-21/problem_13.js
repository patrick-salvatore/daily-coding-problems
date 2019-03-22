/* # 13
Given an integer k and a string s, 
find the length of the longest substring that contains at most k distinct characters.

For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".
*/

// Check the str from each letter and add proceeding letters from i to outputStr
// Check if any of the proceeding letters === i later in the str
    // if so increase the counter and check counter to k
        // if counter === k return the current outputStr
        // else proceed down the str adding letters (break)
    // else if counter > k return full str or "no substring"
function longestString(str, k) {
    if (k <= 1) {
        return str
    } else {
        for (var i = 0; i < str.length; i++) {
            let outputStr = '';
            let counter = 0;
            for (var j = i; j < str.length; j++) {
                console.log(outputStr, counter)
                if (!outputStr.includes(str[j])) {
                    counter++
                    if (counter > k) {
                        break
                    }
                } else {
                    if (counter === k) {
                        return outputStr + str[j]
                    }
                }
                outputStr += str[j];
            }
        }
    }
}

longestString('abcba', 2);
longestString('abcbab', 3);

