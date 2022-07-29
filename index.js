
const buttons =document.querySelectorAll(".button");
const clear =document.querySelector(".clear");
const numbers=document.querySelectorAll(".number");


// https://codepen.io/koselige/pen/XWZLLzv
// https://codepen.io/wesleybertipaglia/pen/JjLPyNR

const updateDisplay = ()=>{
  const  currentOperand=document.querySelector(".current-operand");
  const prevOperand= document.querySelector(".previous-operand");
  currentOperand.innerText=defaultState.displayDigit;
 prevOperand.innerText=defaultState.prevOperand;
 };

const defaultState = {
displayDigit:"0", 
prevOperand:"",
operator:null,
firstDigit:null, 
secondDigit:null, 
currentSum:""
}

const clearDisplay=()=>{
 defaultState.displayDigit="0";
 defaultState.prevOperand="";
 defaultState.operator=null;
 defaultState.firstDigit=null;
 defaultState.secondDigit=null;
}

buttons.forEach(button=> button.addEventListener("click", (event)=>{
  currentValue= event.target

  console.log(currentValue.classList)
  if (currentValue.classList.contains("clear")){
    clearDisplay();
    updateDisplay();
    return;
  }
 

  
  else if(currentValue.classList.contains("negative")){
    console.log("im running")
    inverseNumber()
    updateDisplay()
  }


  else if(currentValue.classList.contains("percent")){
    console.log(`percent`)
    percentage();
    updateDisplay();
  }

  else if (currentValue.classList.contains("operator")){
    handleOperation(currentValue.innerText);
    updateDisplay();
  }

  else if(currentValue.classList.contains("equals")){
    console.log("equals selected")
    updateDisplay();
  }

  else{
    
    inputNumbers(currentValue.innerText);
    updateDisplay();
  }
  
  
  
}));

const inputNumbers=(number)=>{
  if(defaultState.displayDigit==="0"){
    defaultState.displayDigit=number
  }
  else{
    defaultState.displayDigit+=number
  }
}


const inverseNumber= ()=>{
  if (defaultState.displayDigit===0){
    return
  }
  else{
   defaultState.displayDigit=defaultState.displayDigit*-1;
  }
};


const percentage=()=>{
if(defaultState.displayDigit==="0"||defaultState.displayDigit<0)
{
  defaultState.displayDigit==="0";
  defaultState.prevOperand==="0";
}
else{
 defaultState.displayDigit= defaultState.displayDigit/10;
}
};



const handleOperation=(operation)=>{
if (defaultState.operator===null){
  defaultState.operator=operation;
  defaultState.currentSum= defaultState.prevOperand=defaultState.displayDigit+operation
  
  defaultState.firstDigit=defaultState.displayDigit;
  defaultState.displayDigit="0";
  defaultState.operatorSelected=true;
  }
 
  else if(defaultState.operator!==null && defaultState.secondDigit===null) {
defaultState.secondDigit=defaultState.displayDigit;
handleTwoPlusNumbers();

}

}

const handleTwoPlusNumbers=()=>{
  let result=0
switch (defaultState.operator){
  case "+":
 result=parseInt(defaultState.firstDigit)+parseInt(defaultState.secondDigit);
 resetValues(result);
break

case "/":
  result=parseInt(defaultState.firstDigit)/parseInt(defaultState.secondDigit);
  resetValues(result);
  break
  case "*":
    result=parseInt(defaultState.firstDigit)*parseInt(defaultState.secondDigit);
    resetValues(result);
  case "-":
    result=parseInt(defaultState.firstDigit)-parseInt(defaultState.secondDigit);
    resetValues(result);
  break

}
defaultState.displayDigit=result;

}

const calculateResult=()=>{



}

const resetValues = (result)=>{
  defaultState.firstDigit=result;
  defaultState.secondDigit=null;
  defaultState.operator=null;
}


updateDisplay();

