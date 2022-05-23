import React, {PropsWithChildren} from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../calculatrice_style';

interface RenderButtonProps {
    children: any;
    isTotal: boolean;
    onClick: ()=>void;
}

const Render: React.FC<PropsWithChildren<RenderButtonProps>> = (props) => {
    const cssClass = props.isTotal ? styles.calcButton_total : styles.calcButton;
    return (
        <TouchableOpacity style={cssClass} onPress={props.onClick}>
            <Text style={styles.calcButton_text}>{props.children}</Text>
        </TouchableOpacity>
    );
}

export default Render;