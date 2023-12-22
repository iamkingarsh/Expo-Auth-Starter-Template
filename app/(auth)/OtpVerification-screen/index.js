import { View, Text, TouchableOpacity, SafeAreaView, TextInput, KeyboardAvoidingView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Stack, router } from 'expo-router'
import { COLORS, FONT, SIZES } from '../../../constants/theme'
import { ArrowLeftIcon, BackwardIcon } from 'react-native-heroicons/outline'
import OtpInput from '../../../components/ui/otpInput'
import Button from '../../../components/ui/button'

const index = () => {
    const OTP = '123456' //dummy OTP
    const [otp, setOtp] = useState('')

    const verifyOTP = () => {
        if (otp == OTP) {
            router.push('/register-screen')
        }
        else {
            alert('Invalid OTP')
        } //add submit logic here
    }



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
                                    Alert.alert(
                                        "Are you sure? ",
                                        "You will be redirected to login screen",
                                        [
                                            {
                                                text: "Cancel",
                                                style: "cancel"
                                            },
                                            { text: "OK", onPress: () => router.push('/login-screen') }
                                        ],
                                        { cancelable: true }
                                    );
                                }}>
                                    <ArrowLeftIcon width={24} height={24} fill={COLORS.tertiary} />
                                </TouchableOpacity>
                            </View>
                        )

                    },

                }}
            />
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white, margin: SIZES.medium }}>
            <KeyboardAvoidingView behavior='padding'  keyboardVerticalOffset={-150} style={{ flex: 1 }}>
                
                <View style={{ flex: 1 }}>
                <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../../../assets/images/OTPScreen.png')} style={{ width: 200, objectFit:'contain'}} />
                </View>
                <View style={{ flex: 0.6 }}>
                    <View style={{ marginBottom: SIZES.xLarge }}>
                        <Text style={{ fontFamily: FONT.semiBold, fontSize: SIZES.xLarge, color: COLORS.tertiary }}>Enter OTP</Text>
                        <Text style={{ fontFamily: FONT.medium, marginTop: SIZES.xxSmall, fontSize: SIZES.medium, color: COLORS.gray }}>A 6 digit OTP has been sent to  your mobile number +91 7013396624</Text>
                    </View>
                    <View style={{flex: 0.25,  justifyContent: 'start', alignItems: 'start' }}>
                            <OtpInput
                            length={6}
                            value={otp}
                            onOtpChange={(text) => setOtp(text)}/>
                    </View>
                    <View style={{ flex: 0.3 }}>

                    <Button disabled={otp.length != 6 ? true : false} variant="primary" onPress={() => verifyOTP()}>Verify</Button>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: SIZES.small }}>
                        <Text style={{ fontFamily: FONT.medium, marginTop: SIZES.xxSmall, fontSize: SIZES.medium, color: COLORS.gray }}>Didn't receive the OTP?</Text>
                        <TouchableOpacity>
                            <Text style={{ fontFamily: FONT.medium, marginTop: SIZES.xxSmall, fontSize: SIZES.medium, color: COLORS.tertiary }}>Resend OTP</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                </View>
                </View>
                </KeyboardAvoidingView> 

            </SafeAreaView>
        </>
    )
}

export default index