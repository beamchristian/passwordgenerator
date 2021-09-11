window.addEventListener('load', function () {
    var passLength = prompt("How many characters would you like your password to be?");

    while (passLength < 8 || passLength > 128) {
        passLength = prompt("Length must be 8-128 characters. How many characters would you like your password to be?");
    }

    var passUppercase = confirm("Would you like uppercase letters included?");
    var passLowercase = confirm("Would you like lowercase letters included?");
    var passNumbers = confirm("Would you like numbers included?");
    var passSymbols = confirm("would you like special characters included?");

    while (!(passUppercase || passLowercase || passNumbers || passSymbols)) {
        alert("You must select at least one character type!");

        passUppercase = confirm("Would you like uppercase letters included?");
        passLowercase = confirm("Would you like lowercase letters included?");
        passNumbers = confirm("Would you like numbers included?");
        passSymbols = confirm("Would you like special characters included?");
    }

    const resultEl = document.getElementById('password');

    document.getElementById('generate').addEventListener('click', () => {
        resultEl.value = generatePassword(passLowercase, passUppercase, passNumbers, passSymbols, passLength);
    });

});


const randomFunction = {
    lower: randomLower,
    upper: randomUpper,
    number: randomNumber,
    symbol: randomSymbol
};

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    const typesArray = [{
        lower
    }, {
        upper
    }, {
        number
    }, {
        symbol
    }].filter(item => Object.values(item)[0]);

    // create a loop
    for (let i = 0; i < length; i += typesCount) {
        typesArray.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunction[funcName]();
        });
    }

    const finalPass = generatedPassword.slice(0, length);

    return finalPass;
}

// Generator functions
function randomLower() {
    return rando("qwertyuiopasdfghjklzxcvbnm");
}

function randomUpper() {
    return rando("QWERTYUIOPASDFGHJKLZXCVBNM");
}

function randomNumber() {
    return rando(9);
}

function randomSymbol() {
    return rando('!@#$%^&*(){}[]=<>/,.');
}