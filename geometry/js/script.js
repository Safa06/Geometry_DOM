function calculateTriangleArea(){
    const baseInput = getInputValueById('tri-base');
    const heightInput = getInputValueById('tri-height');

    const area = 0.5 * baseInput * heightInput;
    
    setInnerTextById('area-show',area);

}

function calculateRectangleArea(){
    const baseInput = getInputValueById('rec-width');
    const heightInput = getInputValueById('rec-length');

    const area = baseInput * heightInput;
    
    setInnerTextById('area-show',area);

}

function calculateParaArea(){
    const baseInput = getInputValueById('para-width');
    const heightInput = getInputValueById('para-length');

    const area = baseInput * heightInput;
    
    setInnerTextById('area-show',area);

}


function calculateRhombusArea(){
    const baseInput = getInputValueById('rom-width');
    const heightInput = getInputValueById('rom-length');

    const area = 0.5 * baseInput * heightInput;
    
    setInnerTextById('area-show',area);

}


function calculatePentagonArea(){
    const baseInput = getInputValueById('pen-width');
    const heightInput = getInputValueById('pen-length');

    const area = 0.5 * baseInput * heightInput;
    
    setInnerTextById('area-show',area);

}


function calculateEllipseArea(){
    const baseInput = getInputValueById('ell-width');
    const heightInput = getInputValueById('ell-length');

    const area = 3.1416 * baseInput * heightInput;
    
    setInnerTextById('area-show',area);

}


function getInputValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    return inputValue;
}

function setInnerTextById(elementId,areaValue){
    const areaShow = document.getElementById(elementId);
    areaShow.innerText=areaValue;
    console.log(areaValue);

}

