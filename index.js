
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
  if(!currentValue.match(equalSymbol)&&!currentValue.match(symbolsReg))
    {
      
      currentInput.push(currentValue);
      console.log(currentInput);
    }
  else if (currentValue.match(symbolsReg)){
      if(currentInput.length===0) 
        return;
    else{
      currentInput=[currentInput.reduce((ac,cv)=>ac+String(cv))];
      currentInput.push(currentValue);
    //  prevOperand.innerText=topOperand;

     console.log(currentInput)
   
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