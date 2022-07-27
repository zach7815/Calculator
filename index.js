
const buttons =document.querySelectorAll(".button");
const clear =document.querySelector(".clear");
const numbers=document.querySelectorAll(".number");

// https://codepen.io/koselige/pen/XWZLLzv
// https://codepen.io/wesleybertipaglia/pen/JjLPyNR

const defaultState = {
displayDigit:"0", 
operator:null,
operatorSelected:false,
firstDigit:"", 
secondDigit:"", 
}

const clearDisplay=()=>{
  prevOperand.innerText="";
currentOperand.innerText="0";
};



buttons.forEach(button=> button.addEventListener("click", (event)=>{
  currentValue= event.target.innerText;
  let symbolRegex= /[\+|\-|\*|\/]/
if(defaultState.firstDigit===""||defaultState.operator===null||defaultState.secondDigit===""){
  handleCurrentValue(currentValue, symbolRegex)
}







  
    
    

  
  
  
}));

const updateeDisplay = ()=>{
 let  currentOperand=document.querySelector(".current-operand");
 currentOperand.innerText=defaultState.displayDigit;
};

const inverseNumber= (displayNumber)=>{
  if (displayNumber===0){
    return
  }
  else{
    displayNumber*-1;
  }
};


const handleCurrentValue=(currentValue, symbolRegex)=>{ 
  if(currentValue.match(symbolRegex)&&defaultState.firstDigit===null){
    return;
  }
  else if (defaultState.operator===null&&!currentValue.match(symbolRegex)){
    defaultState.firstDigit+=String(currentValue)
    console.log(defaultState.firstDigit)
  }
  else if(defaultState.firstDigit!==""&& currentValue.match(symbolRegex)){
    defaultState.operator=currentValue;
    console.log(defaultState.operator);
    console.log(defaultState);
  }
  else if( defaultState.firstDigit!==""&&defaultState.operator!==null){
    defaultState.secondDigit+=String(currentValue);
    console.log(defaultState);
  }

}






const performCalculation=(num1, operator, num2)=>{
  let result=null;
switch (operator){
  case "+":
    result= num1+num2;
    break
    case "-":
      result=num1-num2;
      break
      case "/":
        result=num1/num2;
        break
        case "*": 
       result= num1*num2;
        break
        case "%":
        result=num1/10
        break
}

return result;
}

clear.addEventListener("click", clearDisplay);

updateeDisplay();

