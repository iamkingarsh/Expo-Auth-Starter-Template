import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, FONT, SHADOWS, SIZES } from '../constants/theme'
import Button from './ui/button'
import tw from 'tailwind-react-native-classnames'
import Input from './ui/Input'
import { router } from 'expo-router'

const LoginWithMobile = () => {
  const [mobile, setMobile] = useState('')
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validMobileNumbers = [
    '9999999999',
    '7013396624',
    '8888888888',
    '7777777777',
    '6666666666',
    '5555555555',
    '4444444444',
    '3333333333',
    '2222222222',
    '1111111111',
    '0000000000',
  ]

  useEffect(() => {
    //set errors upon typing ends
    if (mobile.length > 10 ) {
      setError(true);
      setErrorMessage('Mobile number must be 10 digits');
    } else {
      setError(false);
      setErrorMessage('');
    }
  }, [mobile]);

  const handlesubmit = () => {
    //add submit logic here
    if (validMobileNumbers.includes(mobile)) {
      router.push('/OtpVerification-screen')
    } else {
      alert('Invalid mobile number')
      setError(true);
      setErrorMessage('Invalid mobile number');
    }

  }


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white2, }}>
      <View style={{ margin: SIZES.medium, gap: 6, justifyContent: 'center' }}>

        <Input
          label={true}
          disabled={true}
          labelTitle="Enter Your Mobile Number"
          value={mobile}
          onTextChange={(text) => setMobile(text)}
          setInputError={error}
          setInputErrorMessage={errorMessage}
          placeholder="eg. 99999 99999" type="phone" />
        <Button disabled={mobile.length != 10}
         onPress={handlesubmit} variant="primary" >Request OTP</Button>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={[tw`text-sm`, { fontFamily: FONT.medium, color: COLORS.gray }]}>Don't have an account?</Text>
        <TouchableOpacity
          onPress={() => router.push('/register-screen')}
        >
          <Text style={[tw`text-sm mx-1`, { fontFamily: FONT.medium, color: COLORS.primary }]}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={[tw`my-4 mx-6`, { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }]}>
        <View style={[tw`flex-1`, { height: 1, backgroundColor: COLORS.gray2, opacity: 0.8 }]}></View>
        <Text style={[tw`text-center my-2 mx-3`, { fontFamily: FONT.medium, color: COLORS.gray }]}> OR </Text>
        <View style={[tw`flex-1`, { height: 1, backgroundColor: COLORS.gray2, opacity: 0.8 }]}></View>
      </View>
      <View style={[tw`flex-row justify-center items-center`, { gap: 10 }]}>
        <TouchableOpacity style={[tw`flex-row p-2 rounded-xl flex-1 mx-6 justify-center items-center`, { borderWidth: 1, backgroundColor: COLORS.white2, gap: 6, borderColor: COLORS.gray2 }, SHADOWS.small]}>
          <Image source={require('../assets/GoogleLogo.png')} style={{ width: 20, height: 20 }} />
          <Text style={[tw`text-center my-2`, { fontFamily: FONT.semiBold, color: COLORS.tertiary }]}>Login With Google</Text>
        </TouchableOpacity>
      </View>




    </SafeAreaView>
  )
}

export default LoginWithMobile