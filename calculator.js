const add = function(x,y) {
	total = x + y;
  return total;
};

const subtract = function(x,y) {
	return x - y;
};

const sum = function(num) {
  return num.reduce((a, b) => a + b, 0)
};

const multiply = function(num) {
  return num.reduce((a, b) => a * b)
};

const divide = (numArray, size) => {
    return numArray.reduce((acc, val, ind)=> {
        const subIndex = ind % size;
        if(!Array.isArray(acc[subIndex])) {
            acc[subIndex] = [val];
        }

        else {
            acc[subIndex].push(val);
        };
        return acc;
    }, [])

    // --:First code attempt:--
    // for (let i = 0; index < num.length; i++) {
    //     const element = numArray[i];
    //     element / element+1

    //     }
    
    //     return element;

    
}

const operator = (a, b, op) => {
    if(op == '+') {
        add(a,b)
    }

    else if(op == '-') {
        subtract(a,b)
    }

    else if(op == '*') {
        multiply(a,b)
    }
    else if(op == '/') {
        divide(a,b)
    }

}