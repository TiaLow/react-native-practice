
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated } from 'react-native';

const styles = StyleSheet.create({
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
});

const ButtonFill = () => {

  let state = {
    ready: false,
    animatedValue: new Animated.Value(1)
  };
  
  function startAnimation(){

    console.log('hopefully watching this thing fill up!')

    // Animated.timing(state.animatedValue, {
    //   toValue: -1,
    //   duration: 2000
    // }).start();

  };
  
  let { animatedValue } = state;

  return (

    <>
    
    <TouchableOpacity style={styles.button} onPress={() => startAnimation()}>
      <Text style={styles.buttonText}>Watch this shit!</Text>
    </TouchableOpacity>


    <Animated.View
      style={{
        transform: [
          {
            translateY: animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [-600, 0]
            })
          }
        ],
        height: 250,
        width: 200,
        margin: 5,
        borderRadius: 12,
        justifyContent: "center",
        useNativeDriver: true,
      }}
    >


    </Animated.View>    

    </>
)

}




export default ButtonFill;