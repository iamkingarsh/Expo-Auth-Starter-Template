import { View, Text, SafeAreaView, TextInput, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONT, SIZES } from '../constants/theme'
import Button from './ui/button'

const LoginWithEmail = () => {
    const [email, setEmail] = useState('')
    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white2 }}>
            <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
                <View style={{ flex: 1, margin: SIZES.small, justifyContent: 'center' }}>
                    <TextInput style={
                        {
                            backgroundColor: COLORS.white,
                            borderRadius: 10,
                            padding: SIZES.small,
                            margin: SIZES.small,
                            fontSize: SIZES.medium,
                            fontFamily: FONT.semiBold,
                            color: COLORS.black,
                            borderWidth: 1,
                            borderColor: COLORS.gray2,
                        }

                    } placeholder="Email" value={email} onChangeText={setEmail} />
                    <Button disabled={email.length < 1}

                        variant="primary" >Login</Button>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>

    )
}

export default LoginWithEmail