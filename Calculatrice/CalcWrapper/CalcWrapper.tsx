import React from "react";
import { CalcInput, calcResult, calcul, Erase, Input, Operation } from "../calc";
import CalcButtonBox from "../CalcButtonBox/CalcButtonBox";
import CalcScreen from "../CalcScreen/CalcScreen";
import Render from "./CalcWrapper_render";

interface CalcWrapperState {
  result: calcResult;
}
class CalcWrapper extends React.Component<any, CalcWrapperState>{
  inputChain: Input[] = [];
  previusResult = calcResult.empty();

  constructor(props: any) {
    super(props);

    this.state = {
      result: calcResult.empty()
    }
  }

  onInput = (inputType: CalcInput) => {
    if (Erase.is(inputType)) {
      switch (inputType) {
        case Erase.Delete:
          const prev = this.inputChain.pop();
          if (prev && Operation.is(prev)) {
            this.inputChain.push(prev)
          }
          else if(!prev){
            this.inputChain = [];  
          }
          break;
        case Erase.Clear:
          this.inputChain = [];
          this.previusResult = calcResult.empty();
          break;

      }
    } else {
      this.inputChain.push(inputType);
    }
    let r = this.inputChain.reduce<calcResult>(calcul, this.previusResult)
    console.log("onInput", inputType, this.inputChain,this.previusResult, r);
    this.setState({ result: r })

    if(inputType === Operation.Total){
      this.previusResult = r;
      this.inputChain = [];
    }
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
