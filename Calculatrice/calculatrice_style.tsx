import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    calcScreen: {
        backgroundColor: '#f0f0f0',

        fontSize: 20,
        textAlign: 'right',

        margin: 5,
        padding: 10,

        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',

    },
    calcWrapper: {
        flex: 1,
        backgroundColor: '#5e5e5e',
        flexDirection: 'column',
        display: 'flex',
        height: '100%',
    },
    calcButton: {
        display: 'flex',
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#f0f0f0',
        width: '22%',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    calcButton_total: {
        display: 'flex',
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#f0f0f0',
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    calcButtonBox: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: 5,
    },
    calcButtonRow: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
    }
})