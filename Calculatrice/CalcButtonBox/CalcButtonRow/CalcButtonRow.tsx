
import Render from "./CalcButtonRow_render";

function CalcButtonRow(props:any) {
    return (
        <Render>
            {props.children}
        </Render>
    );
}

export default CalcButtonRow;