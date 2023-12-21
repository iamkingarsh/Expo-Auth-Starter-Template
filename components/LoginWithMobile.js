import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants/theme'
import Button from './ui/button'

const LoginWithMobile = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white2, }}>
        <View style={{flex: 1, margin:SIZES.small, justifyContent: 'center'}}>

           <Button variant="primary" >Request Otp</Button>
        </View>

    </SafeAreaView>
  )
}

export default LoginWithMobile