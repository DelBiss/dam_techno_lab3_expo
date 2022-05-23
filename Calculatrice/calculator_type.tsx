import {calcValue} from './calculator_value'

export type InputNumber=1|2|3|4|5|6|7|8|9|0

export type Input=Operation|InputNumber|Modificator
export type CalcInput = Input|Erase

export enum Erase {
    Delete = '⌫',
    Clear = 'C',
}

export namespace Erase {
    export function is(str:CalcInput): str is Erase{
    return (Object.keys(Erase) as Array<keyof typeof Erase>).some(k => Erase[k] === str);
    }
}

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
            expression:"😊",
            operation:undefined,
        }
    }
}
//////////////////////////////////////////////////////////////////////