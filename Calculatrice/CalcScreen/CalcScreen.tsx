import Render from "./CalcScreen_render";
import { calcResult } from "../calc";

interface ScreenProps {
    result: calcResult;
}

function CalcScreen(props:ScreenProps) {
    return (
        <Render>
            {props.result.value}
        </Render>
    );
}

export default CalcScreen;