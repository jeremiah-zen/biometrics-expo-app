import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native';
import { Grid, Col } from 'react-native-easy-grid';
import styles from './styles/OTPInputStyle';

const OTPInput = ({getOtp}) => {
    // const [otp, setOtp] = useState([]);
    // let otpTextInput = [];

    // useEffect(() => {
    //     otpTextInput[0]._root.focus();
    // },[])

    // const focusPrevious = (key, index) => {
    //     if (key === 'Backspace' && index !== 0)
    //         otpTextInput[index - 1]._root.focus();
    // }

    // const focusNext = (index, value) => {
    //     if (index < otpTextInput.length - 1 && value) {
    //         otpTextInput[index + 1]._root.focus();
    //     }
    //     if (index === otpTextInput.length - 1) {
    //         otpTextInput[index]._root.blur();
    //     }
    //     otp[index] = value;
    //     setOtp(otp)
    //     getOtp(otp.join(''));
    // }

    // const renderInputs = () => {
    //     const inputs = Array(6).fill(0);
    //     const txt = inputs.map(
    //         (i, j) => 
    //         <Col key={j} style={styles.txtMargin}>
    //             <TextInput
    //                 style={[styles.inputRadius, { borderRadius: 10 }]}
    //                 keyboardType="numeric"
    //                 onChangeText={v => focusNext(j, v)}
    //                 onKeyPress={e => focusPrevious(e.nativeEvent.key, j)}
    //                 ref={ref => otpTextInput[j] = ref}
    //             />
    //         </Col>
    //     );
    //     return txt;
    // }

    return(
        <Grid style={styles.gridPad}>
            {renderInputs()}
        </Grid>
    )
}

export default OTPInput;