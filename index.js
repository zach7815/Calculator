const buttons =document.querySelectorAll(".button");
const clear =document.querySelector(".clear");
const numbers=document.querySelectorAll(".number");


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
  if (currentValue.classList.contains("clear")){
    clearDisplay();
    updateDisplay();
    return;
  }
 

  
  else if(currentValue.classList.contains("negative")){
    inverseNumber()
    updateDisplay()
  }


  else if(currentValue.classList.contains("percent")){
    percentage();
    updateDisplay();
  }

  else if (currentValue.classList.contains("operator")){
    console.log("another symbol is detected")
    if (defaultState.firstDigit!==null&&defaultState.secondDigit!==null){
      console.log("another symbol is detected")
      calculateResult(defaultState.firstDigit, defaultState.operator, defaultState.secondDigit);
      defaultState.operator=currentValue.innerText;
      console.log("new symbol is" + currentValue.innerText);
    }

    handleOperation(currentValue.innerText);
    updateDisplay();
  }

  else if(currentValue.classList.contains("equals")){
    defaultState.secondDigit=defaultState.displayDigit;
    calculateResult(defaultState.firstDigit, defaultState.operator, defaultState.secondDigit);
    updateDisplay();
  }

  else{
    if(defaultState.doneCalc===true){
      
      resetValues();
      console.log(defaultState);
      inputNumbers(currentValue.innerText);
      updateDisplay();
    }
    else{
      inputNumbers(currentValue.innerText);
      updateDisplay();
    }
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
  defaultState.currentSum= defaultState.prevOperand=defaultState.displayDigit+operation;
  defaultState.firstDigit=defaultState.displayDigit;
  defaultState.displayDigit="0";
  }
 
  else if(defaultState.operator!==null && defaultState.secondDigit===null) {
defaultState.secondDigit=defaultState.displayDigit;

}

}


const calculateResult=(number1, operator, number2)=>{
  let result=0;
if (number2==null){
  number2=defaultState.displayDigit;
 
}
  let num1= parseFloat(number1);
  let num2=parseFloat(number2);
if (operator==="+"){
  result+=num1+num2;
}
else if (operator=="x"){
  result+=num1*num2;

  
}
else if(operator=="-"){
 result+=num1-num2;
 
}
else {
  result+=num1/num2;

  
}
defaultState.prevOperand="";
defaultState.firstDigit=result;
defaultState.operator=null;
defaultState.secondDigit=null;
defaultState.currentSum=null;
defaultState.displayDigit=result;
defaultState.doneCalc=true;


}

const resetValues = ()=>{
  console.log("reset ran")
  console.log(defaultState)
  defaultState.secondDigit=null;
  defaultState.displayDigit="0";
  delete defaultState.doneCalc
}


updateDisplay();

