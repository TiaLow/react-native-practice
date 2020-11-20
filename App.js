import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated } from 'react-native';

import Timer from './Timer.js';

export default function App() {

  let state = {
    ready: false,
    animatedValue: new Animated.Value(0)
  };

  function startAnimation(){
    Animated.timing(state.animatedValue, {
      toValue: 1,
      duration: 1000
    }).start();
  };


  let { animatedValue } = state;

  return (
    <>

    <View style={styles.container}>      
      <TouchableOpacity style={styles.button} onPress={() => startAnimation()}>
            <Text style={styles.buttonText}>Animation Practice</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.container}>

      <Animated.View
          style={{
            transform: [
              {
                translateX: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-600, 0]
                })
              }
            ],
            height: 250,
            width: 200,
            margin: 5,
            borderRadius: 12,
            // backgroundColor: "#347a2a",
            justifyContent: "center",
            useNativeDriver: true,
          }}
          >

        <Image
        source={require('./assets/images/like.png')}
        style={styles.image}/>

      </Animated.View>
      
    </View>


    <View style={styles.container}>

      <Text style={styles.text}>Countdown will go here</Text>

    </View>

    <View style={styles.container}>

      <Timer/>

    </View>









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
  button: {
    backgroundColor: "#480032",
    width: 100,
    height: 40,
    padding: 3,
    justifyContent: "center",
    borderRadius: 6
  },
  buttonText: {
    color: "#f4f4f4",
    fontWeight: "bold",
    textAlign: "center"
  },
  text: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    textAlign: "center"
  },
  image: {
    height: 250,
    width: 250,
  },
});
