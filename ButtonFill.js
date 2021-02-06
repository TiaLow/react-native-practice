
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';

  
const ButtonFill = () => {

  const [progressStatus, setProgressStatus ] = useState(0);

  // const [progressStatus, setProgressStatus ] = useState(new Animated.Value(0));

  const percentageFill = new Animated.Value(0);  

  const onAnimate = () =>{  
    percentageFill.addListener(({value})=> {  
      setProgressStatus(parseInt(value));  
    });  


    Animated.timing(percentageFill, {  
      toValue: 100,  
      duration: 30000,  
    }).start();  
  }  


    return (  
      <>
        <TouchableOpacity style={{...styles.button, style.somethingElse}} onPress={() => onAnimate()}>
          <Text style={styles.buttonText}>Fill it up</Text>
        </TouchableOpacity>

      <View style={styles.container}>

            <Animated.View  
                style={[  
                  styles.inner,{width: progressStatus +"%"},  
                ]}  
                />  

      </View>  
      </>
    );  
    
}
  
  const styles = StyleSheet.create({  
    container: {  
    width: "100%",  
    height: 40,  
    padding: 3,  
    borderColor: "black",  
    borderWidth: 3,  
    borderRadius: 30,  
    marginTop: 200,  
    justifyContent: "center",  
  },  
  inner:{  
    width: "100%",  
    height: 30,  
    borderRadius: 15,  
    backgroundColor:"grey",  
  } 
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
}); 



export default ButtonFill;