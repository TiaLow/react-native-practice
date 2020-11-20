
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
  image: {
    height: 250,
    width: 250,
  },
});

const Animation = () => {

  let state = {
    ready: false,
    animatedValue: new Animated.Value(-1)
  };
  
  function startAnimation(){
    Animated.timing(state.animatedValue, {
      toValue: 3,
      duration: 500
    }).start();
  };
  
  let { animatedValue } = state;

  return (

    <>
    
    <TouchableOpacity style={styles.button} onPress={() => startAnimation()}>
      <Text style={styles.buttonText}>Animation Practice</Text>
    </TouchableOpacity>


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
        justifyContent: "center",
        useNativeDriver: true,
      }}
    >

    <Image
    source={require('./assets/images/like.png')}
    style={styles.image}/>

    </Animated.View>    

    </>
)

}




export default Animation;