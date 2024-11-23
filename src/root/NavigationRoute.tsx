import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import IntroScreen from '../screens/IntroScreen'
import { NavigationContainer, createStaticNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const RootStack = createNativeStackNavigator({
    screens: {
      Home: IntroScreen,
    },
  });
  
const Navigation = createStaticNavigation(RootStack);
  

export default function NavigationRoute () {
    return (
        <>
        {/* <HomeScreen /> */}
        <Navigation />
        </>
    )
}