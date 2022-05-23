import React, {PropsWithChildren} from 'react';
import Render from "./CalcScreen_render";
import { calcResult } from "../calculator_type";

interface CalcResultProps {
    result: calcResult;
}

const CalcScreen: React.FC<CalcResultProps> = (props) => {
    return (
        <Render result={props.result}>
            {props.result.value}
        </Render>
    );
}

export default CalcScreen;