import React, { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity, PermissionsAndroid} from 'react-native';
import OTPInput from 'react-native-otp-textinput';
import SmsListener from 'react-native-android-sms-listener'
import styles from './styles/HomeStyle';

const Home = () => {
  const [showOtp, setShowOtp] = useState(false);
  const [otpValue, setOtpValue] = useState('');

  useEffect(() => {
    requestReadSmsPermission();
    SmsListener.addListener((message) => {
      console.log('listerner called')
      console.info(message)
    })
  },[])

  const requestReadSmsPermission = async () =>  {
    try {
      var granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_SMS,
        {
        title: "Auto Verification OTP",
        message: "need access to read sms, to verify OTP"
        }
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("sms read permissions granted", granted);

        granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECEIVE_SMS,{
          title: "Receive SMS",
          message: "Need access to receive sms, to verify OTP"
          }
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("RECEIVE_SMS permissions granted", granted);
        } else {
          console.log("RECEIVE_SMS permissions denied");
        }
      } else {
      console.log("sms read permissions denied");
      }
    } catch (err) {
    console.log(err);
    }
  };

  // const getPermission = async () => {

  //   let grantedRead = await PermissionsAndroid.request(
  //     PermissionsAndroid.PERMISSIONS.READ_SMS,
  //     {
  //       title: "Auto Verification OTP",
  //       message: "need access to read sms, to verify OTP"
  //     }
  //   );

  //   let grantedReceive = await PermissionsAndroid.request(
  //     PermissionsAndroid.PERMISSIONS.RECEIVE_SMS,
  //     {
  //       title: "Auto Verification OTP",
  //       message: "need access to receive sms, to verify OTP"
  //     }
  //   );

  //   if (grantedReceive === PermissionsAndroid.RESULTS.GRANTED) {
  //     console.log("RECEIVE_SMS permissions granted", granted);
  //     } else {
  //     console.log("RECEIVE_SMS permissions denied");
  //     }
  // }

  const generateOtp = () => {
    setShowOtp(!showOtp)
    requestReadSmsPermission();
    console.log('doneeee');
    // if (!showOtp) setOtpValue('1234');
    // else setOtpValue('');
    SmsListener.addListener(message => {
      let verificationCodeRegex = /([\d]{4})/;
    
      console.log('listener on!')
      if (verificationCodeRegex.test(message.body)) {
        let verificationCode = message.body.match(verificationCodeRegex)[0]
    
        if(verificationCode){
          setOtpValue(verificationCode);
          console.log(verificationCode)
        } else {
          console.log('no message received!')
        }
      }
    })
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

      <TouchableOpacity onPress={() => console.log('Your otp is ', otpValue)} style={[styles.button, {marginTop: '5%'}]}>
        <Text>{'Submit OTP'}</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Home;
