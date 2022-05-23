


import {Erase, Operation,Modificator, InputNumber, calcResult, Input, CalcInput} from './calculator_type'
import {calcValue} from './calculator_value'
//////////////////////////////////////////////////////////////////////
export interface calculatorState {
    result:calcResult
}

export class Calculator {
    inputChain: Input[] = [];
    previousResult = calcResult.empty();

    static get initialState():calculatorState{
        return {
            result:calcResult.empty()
        }
    }

    onInput(input:CalcInput):calcResult{
        if (Erase.is(input)) {
          let nbInput = this.inputChain.length
            switch (input) {
              case Erase.Delete:
                if (!Operation.is(this.inputChain[nbInput-1])){
                  this.inputChain.pop()
                }
                break;
              case Erase.Clear:
                this.inputChain = [];
                this.previousResult = calcResult.empty();
                break;
      
            }
          } else {
            this.inputChain.push(input);
          }
          const result = this.inputChain.reduce<calcResult>(this.calcul, this.previousResult)
                
          if(input === Operation.Total){
            this.previousResult = result;
            this.inputChain = [];
          }

          return result
        
    }

    calcul(
        previousResult:calcResult,
        currentInput:Input
    ):calcResult{
        const currentResult = {
            previous:previousResult.previous.copy(),
            current:previousResult.current.copy(),
            value:previousResult.value,
            expression:previousResult.expression,
            operation:previousResult.operation,
        }
        if(Operation.is(currentInput)){
            if(currentResult.current.isValid){
                currentResult.previous = new calcValue(Operation.apply(currentResult))
                currentResult.current = new calcValue()
            }
            else if(currentInput === Operation.Total){
                if(currentResult.operation !== Operation.Total){
                    currentResult.current = currentResult.previous.copy()
                    previousResult.current = previousResult.previous.copy()
                    currentResult.previous = new calcValue(Operation.apply(currentResult))
                    currentResult.current = new calcValue()
                }
            }
            currentResult.operation=currentInput
        }
        else{
            currentResult.current=currentResult.current.input(currentInput,currentResult.previous)
        }
        
        currentResult.expression = "."
        if(currentResult.operation === Operation.Total){
            if(previousResult.operation === Operation.Total){
                currentResult.expression = previousResult.expression
            }else{
            
                currentResult.expression = Calculator.GetExpression(previousResult,false) + " = "
            }
        }else{
            currentResult.expression = Calculator.GetExpression(currentResult)
        }
        
        currentResult.value = currentResult.current.isValid  ? currentResult.current.value : currentResult.operation === Operation.Total ? currentResult.previous.value : 0
        
        return currentResult
    }
    
    static GetExpression(result:calcResult, omitCurrent:boolean = true):string{
        if(!omitCurrent){
            if(result.current.isValid){
                if(result.operation){
                    return result.previous.value + " " + result.operation + " " + result.current.value
                }
                return result.current.value.toString()
            }
            return result.previous.value.toString()
        }
    
        if(result.operation && result.operation !== Operation.Total){
            return result.previous.value + " " + result.operation
        }
    
        return "😊"
    
    }
}






