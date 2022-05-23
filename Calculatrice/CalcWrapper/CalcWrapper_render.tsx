import React, {PropsWithChildren} from 'react';
import { View, StyleSheet } from 'react-native';
import { styles } from '../calculatrice_style';

const Render: React.FC<PropsWithChildren<{}>> = ({children}) => {
    
    return (
        <View style={styles.calcWrapper}>
            {children}
        </View>
    );
}



export default Render;