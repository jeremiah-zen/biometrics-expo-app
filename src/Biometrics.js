import React, { useEffect, useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import * as Expo from 'expo';
import * as LocalAuthentication from 'expo-local-authentication';
import styles from './styles/BiometricsStyle';

const Biometrics = ({navigation}) => {

  const [provided, setProvided] = useState(false);
 
  useEffect(() => {
    checkDeviceForHardware();
  },[]);

  const checkDeviceForHardware = async () => {
    let compatible = await LocalAuthentication.hasHardwareAsync();
    // setProvided(compatible)
    if (!compatible) {
      alert('Biometric is not compatible for this device')
    } else {
      alert('Biometric is compatible for this device')
    }
  };

  const checkSupportedBiometrics = async() => {
    let compatible = await LocalAuthentication.supportedAuthenticationTypesAsync();
    console.log('supported ', compatible);

    if(compatible.includes(1 && !2)){
      alert('fingerprint is supported')
    } else if(compatible.includes(!1 && 2)){
      alert('face recognition is supported')
    } else {
      alert('fingerprint and face recognition are both supported')
    }
  }

  const isSavedFingerprints = async() => {
    let enrolled = await LocalAuthentication.isEnrolledAsync();
    console.log(enrolled);
    if(enrolled){
      alert('you can logged in using biometrics');
    } else {
      alert('please register first a biometric locally');
    }
  }

  const authenticateBiometric = async() => {
    let {success, error} = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Sign In',
      fallbackLabel: 'Use your registered device biometrics',
      cancelLabel: 'Cancel'
    });
    if(success){
      navigation.navigate('Home');
    } else {
      console.log('please try again ',error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'This is for checking if sensor / biometrics is provided in this device'}</Text>
      <TouchableOpacity style={styles.button} onPress={() => checkSupportedBiometrics()}>
        <Text>{'Available Sensor'}</Text>
      </TouchableOpacity>

      <Text style={styles.title}>{'Check if there is enrolled biometric'}</Text>
      <TouchableOpacity style={styles.button} onPress={() => isSavedFingerprints()}>
        <Text>{'Check if biometric enrolled'}</Text>
      </TouchableOpacity>

      <Text style={styles.title}>{'Sign in using the provided biometrics'}</Text>
      <TouchableOpacity style={styles.button} onPress={() => authenticateBiometric()}>
        <Text>{'Sign In'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Biometrics;
