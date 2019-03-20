/*  #7 
Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.
For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.
You can assume that the messages are decodable. For example, '001' is not allowed.
 */

m1 = '4';
m2 = '111';
m3 = '12345';

function transcripe (str) {

    const split1 = [];
    const split2 = [];

    for (var i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            if (str[i + 1]) {
                split1.push(str[i] + str[i + 1])
            } else {
                split1.push(str[i])
            }
        } else {
            if (str[i + 1]) {
                split2.push(str[i] + str[i + 1])
            } else {
                split2.push(str[i])
            }
        }
    }

    let numWays = 1 + split1.concat(split2).filter(e => Number(e) <= 26 && Number(e) >= 10).length;


    return numWays
}

// 123 -> '123','12 + 3', '1 + 23' --> 3
transcripe(m3);