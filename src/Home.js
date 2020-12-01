import React, { useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import OTPInput from 'react-native-otp-textinput';
import styles from './styles/HomeStyle';

const Home = () => {
  const [showOtp, setShowOtp] = useState(false);
  const [otpValue, setOtpValue] = useState('');

  const generateOtp = () => {
    setShowOtp(!showOtp)
    if (!showOtp) setOtpValue('1234');
    else setOtpValue('');
  }

  return (
    <View style={styles.container}>
      <Text>{'This is Home page'}</Text>
      {showOtp && (
        <OTPInput
          defaultValue={otpValue}
          handleTextChange={(text) => setOtpValue(text)}
          inputCount={4}
          keyboardType="numeric" 
          tintColor="#000"
          textInputStyle={{color: '#000'}}
        />
      )}
      <TouchableOpacity onPress={() => generateOtp()} style={styles.button}>
        <Text>{'Generate OTP'}</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity onPress={() => console.log('Your otp is ', otpValue)} style={[styles.button, {marginTop: '5%'}]}>
        <Text>{'Submit OTP'}</Text>
      </TouchableOpacity> */}

    </View>
  );
};

export default Home;
