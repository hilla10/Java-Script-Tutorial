function calculator(num1, num2, operator) {
    let result;

    switch(operator) {
        case '+':
        result = num1 + num2;
        break;
        case '-':
        result = num1 - num2;
        break;
        case '*':
        result = num1 * num2;
        break;
        case '/':
        result = num1 / num2;
        break;
        default: result = "Invalid Operator"
    }

    console.log(result);
    return result;
}

// calculator (5, 2, '/')

function calculators (num3, num4, operator1) {

    let results;
    if (operator1 === '+') {
        results = num3 + num4;
    } else if (operator1 === '-') {
        results = num3 - num4;
    } else if (operator1 === '*') {
        results = num3 * num4;
    } else if (operator1 === '/') {
        results = num3 / num4;
    }

    console.log(results);
    return results;
}

calculators (4, 2, '/')