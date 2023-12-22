import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONT, SIZES } from '../constants/theme'
import Button from './ui/button'
import tw from 'tailwind-react-native-classnames'
import Input from './ui/Input'

const LoginWithMobile = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white2, }}>
        <View style={{ margin:SIZES.medium, gap:6, justifyContent: 'center'}}>
            
            <Input
            label={true}
            labelTitle="Enter Your Email"
            placeholder="eg. 99999 99999" type="email" />
           <Button variant="primary" >Request OTP</Button>
        </View>
       
       

    </SafeAreaView>
  )
}

export default LoginWithMobile