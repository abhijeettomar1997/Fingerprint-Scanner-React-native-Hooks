import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  BackHandler,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import FingerprintScanner from 'react-native-fingerprint-scanner';

export default (props) => {
  const [biomatricType, setbiomatricType] = useState(null);

  useEffect(() => {
    FingerprintScanner.isSensorAvailable()
      .then((biometryType) => {
        setbiomatricType(biometryType);
      })
      .catch((error) => console.log('isSensorAvailable error => ', error));
  }, []);
  const showAuthenticationDialog = () => {
    if (biomatricType === 'Biometrics') {
      FingerprintScanner.authenticate({
        description: 'Confirm your Fingerprint',
      })
        .then(() => {
          alert('Scanner Worked Successfully !!');
        })
        .catch((error) => {
          BackHandler.exitApp();
        });
    } else {
      console.log('biometric authentication is not available');
    }
  };

  useEffect(() => {
    showAuthenticationDialog();
  }, [biomatricType]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.buttonStyle} onPress={showAuthenticationDialog}>
          <Text style={styles.textStyle}>Authenticate</Text>
        </TouchableOpacity>

        <Text style={styles.biometryText}>Welcome Abhijeet</Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: '#fcfcfc',
  },
  buttonStyle: {
    width: '30%',
    backgroundColor: 'red',
    borderRadius: 15,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {color: '#fff', fontSize: 17, fontWeight: 'bold'},
  biometryText: {
    color: '#000',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 30,
  },
});
