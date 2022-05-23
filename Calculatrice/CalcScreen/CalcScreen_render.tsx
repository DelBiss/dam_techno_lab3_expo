import React, {PropsWithChildren} from 'react';
import { View, Text } from 'react-native';
import { styles } from '../calculatrice_style';
import { calcResult } from "../calculator_type";

interface CalcResultProps {
    result: calcResult;
}

const Render: React.FC<PropsWithChildren<CalcResultProps>> = (props) => {
    
    return (
        <View style={styles.calcScreen}>
        <Text style={styles.calcScreen_expression}>
            {props.result.expression}
        </Text>
        <Text style={styles.calcScreen_result}>
            {props.children}
        </Text>
      </View>
    );
}

export default Render;