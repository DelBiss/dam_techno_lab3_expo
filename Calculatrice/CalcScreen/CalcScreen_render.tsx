import React, {PropsWithChildren} from 'react';
import { Text } from 'react-native';
import { styles } from '../calculatrice_style';


const Render: React.FC<PropsWithChildren<{}>> = ({children}) => {
    
    return (
        <Text style={styles.calcScreen}>
            {children}
        </Text>
    );
}

export default Render;