import React from 'react';
import { CalcInput, Erase, Modificator, Operation } from "../calculator_type";
import CalcButton from "../CalcButton/CalcButton";
import Render from "./CalcButtonBox_render";


interface ButtonBoxProps {
    onInput: (inputType:CalcInput)=>void;
}

function CalcButtonBox(props:ButtonBoxProps) {
    return (
        <Render>
              <CalcButton inputType={Erase.Clear} onClick={props.onInput}/>
              <CalcButton inputType={Modificator.Invert} onClick={props.onInput}/>
              <CalcButton inputType={Erase.Delete} onClick={props.onInput}/>
              <CalcButton inputType={Operation.Div} onClick={props.onInput}/>
            
              <CalcButton inputType={7} onClick={props.onInput}/>
              <CalcButton inputType={8} onClick={props.onInput}/>
              <CalcButton inputType={9} onClick={props.onInput}/>
              <CalcButton inputType={Operation.Mul} onClick={props.onInput}/>
            
              <CalcButton inputType={4} onClick={props.onInput}/>
              <CalcButton inputType={5} onClick={props.onInput}/>
              <CalcButton inputType={6} onClick={props.onInput}/>
              <CalcButton inputType={Operation.Sub} onClick={props.onInput}/>
            
              <CalcButton inputType={1} onClick={props.onInput}/>
              <CalcButton inputType={2} onClick={props.onInput}/>
              <CalcButton inputType={3} onClick={props.onInput}/>
              <CalcButton inputType={Operation.Add} onClick={props.onInput}/>
            
              <CalcButton inputType={0} onClick={props.onInput}/>
              <CalcButton inputType={Modificator.Decimal} onClick={props.onInput}/>
              <CalcButton inputType={Operation.Total} onClick={props.onInput}/>
            
            
        </Render>
    );
}

export default CalcButtonBox;