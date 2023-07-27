const inputvalue1 = document.getElementById("input1");
const inputvalue2 = document.getElementById("input2");
const inputvalue3 = document.getElementById("input3");
const outputField = document.getElementById('output');

const form = document.getElementById('converter');


function display(input1, input2, input3 ){
    if(input3 === '+'){
        return input1+input2;
    }
    if(input3 === '-'){
        return input1-input2;
    }
    if(input3 === '/'){
        return input1/input2;
    }
    if(input3 === '*') {
        return input1*input2;
    }
    else{
        throw new Error('Invalid operation');    
    }
    
    
}

form.addEventListener('input', () => {
    const input1 = parseInt(inputvalue1.value);
    const input2 = parseInt(inputvalue2.value);
    const toUnit = inputvalue3.value;
  
    const outputTemp = display(input1, input2, toUnit);
    outputField.value =  outputTemp;
  });

  function sendDataToiOSApp() {
    const inputvalue1 = document.getElementById("input1");
    console.log("this function is called",inputvalue1)
    var data = {
        inputvalue1 : inputvalue1,
        inputvalue2 : inputvalue2,
        inputvalue3 : inputvalue3,
        outputField : outputField
    };
    window.webkit.messageHandlers.iOSApp.postMessage(data)
}