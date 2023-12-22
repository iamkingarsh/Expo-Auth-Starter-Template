import { View, Text, SafeAreaView, TextInput, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONT, SIZES } from '../constants/theme'
import Button from './ui/button'
import Input from './ui/Input'

const LoginWithEmail = () => {
    const [email, setEmail] = useState('')
    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white2 }}>
            <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
                <View style={{  margin: SIZES.small, gap:8, justifyContent: 'center' }}>
                    <Input 
                    label={true}
                    labelTitle="Enter Your Email Address"
                    placeholder="eg. example@gmail.com" type="email" />
                    <Input 
                    label={true}
                    labelTitle="Enter Your Password"
                    placeholder="eg. ********" type="password" />

                    <Button disabled={email.length < 1} variant="primary" >Login</Button>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>

    )
}

export default LoginWithEmail