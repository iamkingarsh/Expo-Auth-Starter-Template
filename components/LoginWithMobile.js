import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONT, SHADOWS, SIZES } from '../constants/theme'
import Button from './ui/button'
import tw from 'tailwind-react-native-classnames'
import Input from './ui/Input'

const LoginWithMobile = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white2, }}>
        <View style={{ margin:SIZES.medium, gap:6, justifyContent: 'center'}}>
            
            <Input
            label={true}
            labelTitle="Enter Your Mobile Number"
            placeholder="eg. 99999 99999" type="phone" />
           <Button variant="primary" >Request OTP</Button>
        </View>
        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <Text style={[tw`text-sm`, {fontFamily: FONT.medium, color: COLORS.gray}]}>Don't have an account?</Text>
            <TouchableOpacity>
                <Text style={[tw`text-sm mx-1`, {fontFamily: FONT.medium, color: COLORS.primary}]}>Register</Text>
            </TouchableOpacity>
        </View>
        <View style={[tw`my-4 mx-6`,{flexDirection:'row', justifyContent:'center', alignItems:'center', }]}>
          <View style={[tw`flex-1`, {height:1, backgroundColor:COLORS.gray2, opacity: 0.8}]}></View>
            <Text style={[tw`text-center my-2 mx-3`, {fontFamily: FONT.medium, color: COLORS.gray}]}> OR </Text>
          <View style={[tw`flex-1`, {height:1, backgroundColor:COLORS.gray2, opacity: 0.8}]}></View>
        </View>
        <View style={[tw`flex-row justify-center items-center`, {gap:10}]}>
            <TouchableOpacity style={[tw`flex-row p-2 rounded-xl flex-1 mx-6 justify-center items-center`, {borderWidth:1,  backgroundColor:COLORS.white2, gap:6, borderColor:COLORS.gray2}, SHADOWS.small]}>
                <Image source={require('../assets/GoogleLogo.png')} style={{width: 20, height: 20}} />
                 <Text style={[tw`text-center my-2`, {fontFamily: FONT.semiBold, color: COLORS.tertiary}]}>Login With Google</Text>
            </TouchableOpacity>    
        </View>

       
       

    </SafeAreaView>
  )
}

export default LoginWithMobile