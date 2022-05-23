import React from "react";
import { calculatorState, Calculator } from "../calculator";
import {CalcInput} from '../calculator_type'
import CalcButtonBox from "../CalcButtonBox/CalcButtonBox";
import CalcScreen from "../CalcScreen/CalcScreen";
import Render from "./CalcWrapper_render";


class CalcWrapper extends React.Component<any, calculatorState>{
  calculator:Calculator = new Calculator();

  constructor(props: any) {
    super(props);

    this.state = Calculator.initialState;
  }

  onInput = (inputType: CalcInput) => {
    this.setState({
      result: this.calculator.onInput(inputType)
    });
  }

  render(): React.ReactNode {
    return (
      <Render>
        <CalcScreen result={this.state.result} />
        <CalcButtonBox onInput={this.onInput} />
      </Render>
    );
  }
}


export default CalcWrapper;
