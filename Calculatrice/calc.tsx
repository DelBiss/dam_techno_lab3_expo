export enum Erase {
    Delete = '⌫',
    Clear = 'C',
}

export namespace Erase {
    export function is(str:CalcInput): str is Erase{
    return (Object.keys(Erase) as Array<keyof typeof Erase>).some(k => Erase[k] === str);
    }
}

// export enum Command {
//     Total = '=',
// }

// export namespace Command {
//     export function is(str:Input): str is Command{
//     return (Object.keys(Command) as Array<keyof typeof Command>).some(k => Command[k] === str);
//     }
// }

//////////////////////////////////////////////////////////////////////

export enum Modificator {
    Decimal = '.',
    Invert = '±',
}

export namespace Modificator {
    export function is(str:Input): str is Modificator{
        return (Object.keys(Modificator) as Array<keyof typeof Modificator>).some(k => Modificator[k] === str);
    }
}

//////////////////////////////////////////////////////////////////////
export enum Operation {
  Add = "+",
  Sub = "-",
  Mul = "×",
  Div = "÷",
  Total = '=',
}

export namespace Operation {
    const operationFunctions:Record<Operation, (cr:calcResult)=>number> = {
        [Operation.Add]: (cr)=>{return cr.previous.value+cr.current.value},
        [Operation.Sub]: (cr)=>{return cr.previous.value-cr.current.value},
        [Operation.Mul]: (cr)=>{return cr.previous.value*cr.current.value},
        [Operation.Div]: (cr)=>{return cr.previous.value/cr.current.value},
        [Operation.Total]: (cr)=>{return cr.current.value},
    }
    export function is(str:Input): str is Operation{
        return (Object.keys(Operation) as Array<keyof typeof Operation>).some(k => Operation[k] === str);
    }

    export function apply(cr:calcResult):number{
        if(cr.operation){
            return operationFunctions[cr.operation](cr)
        }
        
        if(cr.previous.isValid && cr.current.isValid){
            throw Error("Trying to apply an undefined operation, but both side are valid. Don't know witch value the good one.")
        }
        return cr.previous.isValid ? cr.previous.value : cr.current.value
        
    }
}
//////////////////////////////////////////////////////////////////////

class calcValue {
    private _value: number|null = null;
    decimal: number = -1;
    invert: boolean = false;
    
    constructor(val?:number){
        
        this._value = val?val:null
    }

    public copy():calcValue{
        let copy = new calcValue()
        if (this.isValid){
            copy = new calcValue(this.rawValue)
        }

        copy.decimal = this.decimal
        copy.invert = this.invert
        return copy
    }

    public get value() {
        return this.invert? this.rawValue * -1 : this.rawValue
        
    }

    public get rawValue():number{
        return this._value != null ? this._value : 0
    }
    public get isValid():boolean{
        return this._value != null
    }

    public input(i:Modificator|InputNumber,p:calcValue):calcValue{
        
        if(Modificator.is(i)){
            switch(i){
                case Modificator.Decimal:
                    this.decimal = this.decimal < 0 ? 0 : this.decimal
                    break
                case Modificator.Invert :
                    this.invert = !this.invert
                    break
            }
            return this
        } else {
            if(this.decimal >= 0){
                this.decimal++
                this._value = this.rawValue + (i/(10**this.decimal))
                return this
            }
            this._value =  (this.rawValue * 10) + i
            return this
        }
    }

    toString():string{
        return this.value.toFixed()
    }
}

//////////////////////////////////////////////////////////////////////
export interface calcResult {
    previous:calcValue
    current:calcValue
    value:number
    expression:string
    operation:Operation|undefined,
}

export namespace calcResult {
    export function empty():calcResult{
        return {
            previous:new calcValue(),
            current:new calcValue(),
            value:0,
            expression:"",
            operation:undefined,
        }
    }
}
type InputNumber=1|2|3|4|5|6|7|8|9|0

export type Input=Operation|InputNumber|Modificator
export type CalcInput = Input|Erase



export function calcul(
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
    
    currentResult.expression = ""
    if(currentResult.operation === Operation.Total){
        if(previousResult.operation === Operation.Total){
            currentResult.expression = previousResult.expression
        }else{
        
            currentResult.expression = GetExpression(previousResult,false) + " = "
        }
    }else{
        currentResult.expression = GetExpression(currentResult)
    }
    
    currentResult.value = currentResult.current.isValid  ? currentResult.current.value : currentResult.operation === Operation.Total ? currentResult.previous.value : 0
    //currentResult.operation === Operation.Total ?currentResult.previous.value: currentResult.current.value// ? currentResult.current.value : currentResult.previous.value
    
    return currentResult
}

function GetExpression(result:calcResult, omitCurrent:boolean = true):string{
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

    return ""

}

