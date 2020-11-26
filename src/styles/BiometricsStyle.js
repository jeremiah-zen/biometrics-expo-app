import {StyleSheet} from 'react-native';


const BiometricStyle = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        marginTop: '15%',
        marginBottom: '5%'
    },  
    button: {
        padding: '3.4%',
        borderWidth: 2,
        borderColor: '#cccccc',
        borderRadius: 5
    }
});

export default BiometricStyle;