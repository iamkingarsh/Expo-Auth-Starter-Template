import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONT, SIZES } from '../constants/theme'
import Button from './ui/button'
import tw from 'tailwind-react-native-classnames'

const LoginWithMobile = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white2, }}>
        <View style={{ margin:SIZES.small, justifyContent: 'center'}}>

           <Button variant="primary" >Request Otp</Button>
        </View>
       
       

    </SafeAreaView>
  )
}

export default LoginWithMobile