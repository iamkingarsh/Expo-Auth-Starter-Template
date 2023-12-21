import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { COLORS } from '../../constants/theme'
import { SearchBar } from 'react-native-screens'

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <Stack.Screen options={
        {
          headerShown: true,
          headerTitle: 'Login to your account',
          headerBackgroundStyle: {
            backgroundColor: COLORS.white
          },
          headerLargeStyle: {
            backgroundColor: COLORS.white
          },
          headerBackButtonMenuEnabled: true,
          headerTintColor: COLORS.tertiary,
          headerShadowVisible: false,
          headerBackVisible: true,
          fullScreenGestureEnabled: true,
          customAnimationOnGesture: false,
          
        }
        }
        />
   
      <Text>loginScreen</Text>
    </SafeAreaView>
  )
}

export default LoginScreen