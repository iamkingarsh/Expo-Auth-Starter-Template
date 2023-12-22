import { View, Text, TouchableOpacity, SafeAreaView, TextInput, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Stack, router } from 'expo-router'
import { COLORS, FONT, SIZES } from '../../../constants/theme'
import { ArrowLeftIcon, BackwardIcon } from 'react-native-heroicons/outline'
import OtpInput from '../../../components/ui/otpInput'

const index = () => {
  return (
    <>
    <StatusBar style="auto" />
    <Stack.Screen
        options={{
            headerTitle: 'OTP Verification',
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: COLORS.white2
            },
            headerLargeStyle: {
                backgroundColor: COLORS.white
            },
            headerTitleStyle: {
                fontFamily: FONT.semiBold,
                fontSize: SIZES.medium,
                color: COLORS.tertiary
            },
            headerTintColor: COLORS.tertiary,
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerLargeTitleShadowVisible: false,
            gestureEnabled: false,
            headerBackButtonMenuEnabled: false,
            headerLeft: () => {
                return (
                    <View >
                        <TouchableOpacity onPress={() => {
                            router.back()
                        }}>
                            <ArrowLeftIcon width={24} height={24} fill={COLORS.tertiary} />
                        </TouchableOpacity>
                    </View>
                )
            
            },
            
        }}
    />
    <SafeAreaView style={{flex:1, backgroundColor: COLORS.white, margin:SIZES.medium}}>
      <View style={{flex:0.4, justifyContent:'center', alignItems:'center'}}>
        <Text>Test</Text>
      </View>
        <View style={{flex:0.6}}>
            <Text style={{fontFamily: FONT.semiBold, fontSize: SIZES.xLarge, color: COLORS.tertiary}}>Enter OTP</Text>
            <Text style={{fontFamily: FONT.medium,marginTop:SIZES.xxSmall,   fontSize: SIZES.medium, color: COLORS.gray}}>A 6 digit OTP has been sent to  your mobile number +91 7013396624</Text>
        </View>
        <KeyboardAvoidingView behavior="padding" style={{flex:0.6, justifyContent:'center', alignItems:'center'}}>

        <View style={{flex:0.6, justifyContent:'center', alignItems:'center'}}>
            {/* <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 50, textAlign:'center' }}
                textContentType='oneTimeCode'
                autoFocus={true}
                caretHidden={true}
                selectionColor={COLORS.primary}
                
                keyboardType="number-pad"
                maxLength={6}
                /> */}
                <OtpInput length={6} onOtpChange={(otp) => console.log(otp)} />
        </View>
                </KeyboardAvoidingView>
    </SafeAreaView>
    </>
  )
}

export default index