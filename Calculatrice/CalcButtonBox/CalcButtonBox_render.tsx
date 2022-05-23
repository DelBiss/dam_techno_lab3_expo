import React, {PropsWithChildren} from 'react';
import { View } from 'react-native';
import { styles } from '../calculatrice_style';


const Render: React.FC<PropsWithChildren<{}>> = ({children}) => {
    
    return (
        <View style={styles.calcButtonBox}>
            {children}
        </View>
    );
}

export default Render;