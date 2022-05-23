import { CalcInput, Erase, Modificator, Operation } from "../calc";
import CalcButton from "../CalcButton/CalcButton";
import Render from "./CalcButtonBox_render";
import CalcButtonRow from "./CalcButtonRow/CalcButtonRow";

interface ButtonBoxProps {
    onInput: (inputType:CalcInput)=>void;
}

function CalcButtonBox(props:ButtonBoxProps) {
    return (
        <Render>
            <CalcButtonRow>
            <CalcButton inputType={Erase.Clear} onClick={props.onInput}/>
            <CalcButton inputType={Modificator.Invert} onClick={props.onInput}/>
            <CalcButton inputType={Erase.Delete} onClick={props.onInput}/>
            <CalcButton inputType={Operation.Div} onClick={props.onInput}/>
            </CalcButtonRow>
            <CalcButtonRow>
            <CalcButton inputType={7} onClick={props.onInput}/>
            <CalcButton inputType={8} onClick={props.onInput}/>
            <CalcButton inputType={9} onClick={props.onInput}/>
            <CalcButton inputType={Operation.Mul} onClick={props.onInput}/>
            </CalcButtonRow>
            <CalcButtonRow>
            <CalcButton inputType={4} onClick={props.onInput}/>
            <CalcButton inputType={5} onClick={props.onInput}/>
            <CalcButton inputType={6} onClick={props.onInput}/>
            <CalcButton inputType={Operation.Sub} onClick={props.onInput}/>
            </CalcButtonRow>
            <CalcButtonRow>
            <CalcButton inputType={1} onClick={props.onInput}/>
            <CalcButton inputType={2} onClick={props.onInput}/>
            <CalcButton inputType={3} onClick={props.onInput}/>
            <CalcButton inputType={Operation.Add} onClick={props.onInput}/>
            </CalcButtonRow>
            <CalcButtonRow>
            <CalcButton inputType={0} onClick={props.onInput}/>
            <CalcButton inputType={Modificator.Decimal} onClick={props.onInput}/>
            <CalcButton inputType={Operation.Total} onClick={props.onInput}/>
            </CalcButtonRow>
            
        </Render>
    );
}

export default CalcButtonBox;