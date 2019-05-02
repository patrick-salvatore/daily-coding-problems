/*

You run an e-commerce website and want to record the last N order ids in a log. 

Implement a data structure to accomplish this, with the following API:
    -record(order_id): adds the order_id to the log
    -get_last(i): gets the ith last element from the log. i is guaranteed to be smaller    
    than or equal to N.

*/


// assumes that the record function will take a single numeric parameter
class orderLog { 
    constructor(items = []) {
        this.items = items
    }

    record = (order_id) => {
        this.items.push(order_id)
    }

    get_last = (i) => {

        if (i > this.items.length) {
            return undefined
        }

        let output = [];
        for (let j = 0; j < i; j++) {
            output.push(this.items[j])
        }
        return output
    }
}