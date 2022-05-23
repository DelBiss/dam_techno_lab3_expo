import React from 'react';
import Render from "./CalcButton_render";
import {CalcInput, Operation} from "../calculator_type";


interface ButtonProps {
    inputType:CalcInput,
    onClick: (inputType:CalcInput)=>void;
}

const CalcButton: React.FC<ButtonProps> = (props) => {
    return (
        <Render isTotal={props.inputType === Operation.Total} onClick={()=>props.onClick(props.inputType)}>
            {props.inputType}
        </Render>
    );
}


export default CalcButton;