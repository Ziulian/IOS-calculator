//numere
const digit0 = document.querySelector('#digit0');
const digit1 = document.querySelector('#digit1');
const digit2 = document.querySelector('#digit2');
const digit3 = document.querySelector('#digit3');
const digit4 = document.querySelector('#digit4');
const digit5 = document.querySelector('#digit5');
const digit6 = document.querySelector('#digit6');
const digit7 = document.querySelector('#digit7');
const digit8 = document.querySelector('#digit8');
const digit9 = document.querySelector('#digit9');

//operatii
const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const multiply = document.querySelector('#multiply');
const division = document.querySelector('#division');
const reset = document.querySelector('#reset');
const equal = document.querySelector('#equal');
const coma = document.querySelector('#coma');
const negative = document.querySelector('#negative')


const result = document.querySelector('#result');

let firstNumber = 0;
let secondNumber = 0;
let startBuildingSecondNumber = false;
let operation = '';



function buildNumber(numberReceived){
    if (startBuildingSecondNumber === false){
        firstNumber = firstNumber * 10 + numberReceived;
        result.innerHTML = firstNumber;
    }
    else{
        secondNumber = secondNumber * 10 +numberReceived;
        result.innerHTML = secondNumber;
    }
}

function handleMultiply(){
    startBuildingSecondNumber = true;
    operation = 'multiply';
}

function handleDivision(){
    startBuildingSecondNumber = true;
    operation = 'division';
}

function handleAdd(){
    startBuildingSecondNumber = true;
    operation = 'add';
}

function handleSubtract(){
    startBuildingSecondNumber = true;
    operation = 'subtract';
}

function handleReset(){
    operation = 'reset';
    result.innerHTML = 0;
    firstNumber = 0;
    secondNumber = 0;
}


function handleNegative(){
    operation = 'negative';
    if(operation === 'negative'){
        if(startBuildingSecondNumber === false){
            operationResult = firstNumber * -1;
            result.innerHTML = parseFloat(operationResult);
        }
        else{
            operationResult = secondNumber * (-1);
            result.innerHTML = parseFloat(operationResult);
        } 
}
}


function handleEqual(){
    if (operation === 'multiply'){
        let operationResult = firstNumber * secondNumber;
        result.innerHTML = operationResult;
    }
    else if (operation === 'division'){
        let operationResult = firstNumber / secondNumber;
        result.innerHTML = operationResult;
    }
    else if (operation === 'add'){
        let operationResult = firstNumber + secondNumber;
        result.innerHTML = operationResult;
    }
    else if (operation === 'subtract'){
        let operationResult = firstNumber - secondNumber;
        result.innerHTML = operationResult;
    }
    

    firstNumber = '';
    secondNumber = '';
    startBuildingSecondNumber = false;
    operation = '';

}


digit0.addEventListener('click', function(){
    buildNumber(0);
})
digit1.addEventListener('click', function(){
    buildNumber(1);
})
digit2.addEventListener('click', function(){
    buildNumber(2);
})
digit3.addEventListener('click', function(){
    buildNumber(3);
})
digit4.addEventListener('click', function(){
    buildNumber(4);
})
digit5.addEventListener('click', function(){
    buildNumber(5);
})
digit6.addEventListener('click', function(){
    buildNumber(6);
})
digit7.addEventListener('click', function(){
    buildNumber(7);
})
digit8.addEventListener('click', function(){
    buildNumber(8);
})
digit9.addEventListener('click', function(){
    buildNumber(9);
})


multiply.addEventListener('click', handleMultiply);
division.addEventListener('click', handleDivision);
add.addEventListener('click', handleAdd);
subtract.addEventListener('click', handleSubtract);
equal.addEventListener('click', handleEqual);
reset.addEventListener('click', handleReset);
negative.addEventListener('click', handleNegative);
