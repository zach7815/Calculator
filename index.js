
const buttons =document.querySelectorAll(".button");
const prevOperand= document.querySelector(".previous-operand");
const currentOperand=document.querySelector(".current-operand");
const clear =document.querySelector(".clear");
let currentInput=[];
let operatorIndexes=[];
let currentSymbolIndex;
let calStarted=false;

const numbers=document.querySelectorAll(".number");

numbers.forEach(button=>button.addEventListener("click", (event)=>{
  currentOperand.innerText+=event.target.value;
}));

buttons.forEach(button=> button.addEventListener("click", (event)=>{
  const numbersReg=/[0-9]/gi;
  const symbolsReg= /[\*|\-|+|\/]/;
  const equalSymbol=/=/;
  currentValue= event.target.value;
  if(!currentValue.match(numbersReg)&&!currentValue.match(symbolsReg))
    {
      alert(" a number has been detected")
      let digit=parseInt(currentValue);
      console.log(digit);
      currentInput.push(digit);
      console.log(currentInput);
    }
  else if (currentValue.match(symbolsReg)){
      if(currentInput.length===0) 
        return;
    else{
      alert("a symbol has been selected")
      currentInput.reduce((ac,cv)=>ac+String(cv));
      console.log(currentInput)
    currentInput.push(currentValue);
    console.log(currentInput);
    }
    
  }
  

  
  
}));



const clearDisplay=()=>{
  prevOperand.innerText="";
currentOperand.innerText="0";
  currentInput=[];
  console.log(currentInput);
};

clear.addEventListener("click", clearDisplay);

const toggleNegative =()=>{
  if (currentOperand[0] !== "-"){
console.log(currentOperand[0]);
  }
 
  
  

};