import React, { useState, useEffect } from 'react';

import { Text } from 'react-native';

// RESOURCE: https://medium.com/better-programming/building-a-simple-countdown-timer-with-react-4ca32763dda7

const Timer = () => {

  const [ seconds, setSeconds ] = useState(10);

  useEffect(() => {

    const myInterval = setInterval(() => {

      setSeconds((seconds) => seconds -1);

    }, 1000)

    if( seconds === 0 ){
      clearInterval(myInterval);

      // logic to go to next question
    }
  
    return() => {
      clearInterval(myInterval);
    }

  })

  

  return (

      <Text>Countdown: {seconds}</Text>

  );
}




export default Timer;