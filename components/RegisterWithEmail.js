import { View, Text, SafeAreaView, TextInput, KeyboardAvoidingView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { APP_NAME, AUTH_TYPES, COLORS, FONT, SHADOWS, SIZES } from '../constants/theme'
import Button from './ui/button'
import Input from './ui/Input'
import tw from 'tailwind-react-native-classnames'
import { router } from 'expo-router'

const RegisterWithEmail = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [fullname, setFullname] = useState('');

    const registeredEmail = 'kingarsh175@gmail.com'; //dummy email for login
    const registeredPassword = '123456'; //dummy password 



    const handlesubmit = () => {
        //add submit logic here
        if (email.length > 4 && !email.includes('@')) {
            setError(true);
            setErrorMessage('Invalid email address');
        } else if (password.length < 1) {
            setError(true);
            setErrorMessage('Password cannot be empty');
        } else if (password.length < 6) {
            setError(true);
            setErrorMessage('Password must be atleast 6 characters');
        } else if (email !== registeredEmail && password !== registeredPassword) {

            setError(true);
            setErrorMessage('Invalid email or password');
        }
        else {

            setError(false);
            setErrorMessage('');
            alert('Login successful')
            router.push('/register-screen')
        }
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white2 }}>
            {AUTH_TYPES.EMAIL_WITH_OTP === true ? <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
                <View style={{ margin: SIZES.small, gap: 8, justifyContent: 'center' }}>
                    <Input
                        label={true}
                        labelTitle="Enter Your Full Name"
                        value={fullname}
                        onTextChange={(text) => setFullname(text)}
                        placeholder="eg. John Doe" type="text" />
                    <Input
                        label={true}
                        labelTitle="Enter Your Email Address"
                        value={email}
                        onTextChange={(text) => setEmail(text)}
                        placeholder={`eg. johndoe@${APP_NAME.toLocaleLowerCase().replace(" ", "")}.com`} type="email" />
                    <Input
                        label={true}
                        labelTitle="Enter Your Password"
                        value={password}
                        onTextChange={(text) => setPassword(text)}
                        setInputError={error}
                        setInputErrorMessage={errorMessage}
                        placeholder="eg. ********" type="password" />

                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <Text style={[tw`text-sm mx-1`, { fontFamily: FONT.medium, color: COLORS.primary }]}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <Button onPress={handlesubmit} disabled={email.length < 1} variant="primary" >Login</Button>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={[tw`text-sm`, { fontFamily: FONT.medium, color: COLORS.gray }]}>Already have an account?</Text>
                    <TouchableOpacity
                        onPress={() => router.push('/register-screen')}

                    >
                        <Text style={[tw`text-sm mx-1`, { fontFamily: FONT.medium, color: COLORS.primary }]}>Login</Text>
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
            </KeyboardAvoidingView> :
                <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
                    <View style={{ margin: SIZES.small, gap: 8, justifyContent: 'center' }}>
                    <Input
                        label={true}
                        labelTitle="Enter Your Full Name"
                        value={fullname}
                        onTextChange={(text) => setFullname(text)}
                        placeholder="eg. John Doe" type="text" />
                        <Input
                            label={true}
                            labelTitle="Enter Your Email Address"
                            value={email}
                            onTextChange={(text) => setEmail(text)}
                            placeholder={`eg. johndoe@${APP_NAME.toLocaleLowerCase().replace(" ", "")}.com`} type="email" />
                        <Button onPress={handlesubmit} disabled={email.length < 1} variant="primary" >Continue with Email</Button>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={[tw`text-sm`, { fontFamily: FONT.medium, color: COLORS.gray }]}>Already have an account?</Text>
                        <TouchableOpacity
                            onPress={() => router.push('/login-screen')}

                        >
                            <Text style={[tw`text-sm mx-1`, { fontFamily: FONT.medium, color: COLORS.primary }]}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    {AUTH_TYPES.GOOGLE_PROVIDER &&
                        <> <View style={[tw`my-4 mx-6`, { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }]}>
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
                        </>}
                </KeyboardAvoidingView>

            }
        </SafeAreaView>

    )
}

export default RegisterWithEmail