import {Modificator, InputNumber} from './calculator_type'

export class calcValue {
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
