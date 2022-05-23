import Render from "./CalcButton_render";
import {CalcInput, Operation} from "../calc";


interface ButtonProps {
    inputType:CalcInput
    onClick: (inputType:CalcInput)=>void;
}

function CalcButton(props:ButtonProps) {
    
    return (
        <Render isTotal={props.inputType === Operation.Total} onClick={()=>props.onClick(props.inputType)}>
            {props.inputType}
        </Render>
    );
}


export default CalcButton;