import './CalcButton.css';
import PropTypes from 'prop-types'

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
            <Text>{props.children}</Text>
        </TouchableOpacity>
    );
}

export default Render;