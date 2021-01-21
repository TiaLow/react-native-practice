import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View} from 'react-native';

import Animation from './Animation.js';
import Timer from './Timer.js';
import ButtonFill from './ButtonFill.js';

export default function App() {


  return (
    <>

    {/* <View style={styles.container}>
      <Animation/>
    </View> */}

    <View style={styles.container}>
      <ButtonFill/>
    </View>


    {/* <View style={styles.container}>
      <Timer/>
    </View> */}


    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
