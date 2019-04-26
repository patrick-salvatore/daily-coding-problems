/*
The area of a circle is defined as πr^2. 
Estimate π to 3 decimal places using a Monte Carlo method.

**HINT: The basic equation of a circle is x^2 + y^2 = r^2.**

*/ 

const estimatePIE = (total) => {
    let numInside = 0; 
    
    for (let i = 0; i <= total; i++) {
        let x = Math.random();
        let y = Math.random();

        if ((x**2 + y**2) <= 1) {
            numInside += 1
        }
    }
    
    const pi = 4 * (numInside/total)
    console.log(pi) 
}
