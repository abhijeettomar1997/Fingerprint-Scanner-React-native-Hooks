/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';
import Index from './src/index';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <>
      <Index />
    </>
  );
};

const styles = StyleSheet.create({

  textStart: {
    fontSize: 18,
    color: '#000000',
  },
  viewStart: {
    flex: 1,
    minHeight: Dimensions.get("window").height,
    justifyContent: 'center',
    alignItems: 'center',
    margin:'5%',
    backgroundColor:'red'
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;