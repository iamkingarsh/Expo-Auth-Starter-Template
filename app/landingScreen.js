import { View, Text, SafeAreaView, Dimensions } from 'react-native'
import React from 'react'
import { Stack, router } from 'expo-router'
import { COLORS, FONT, SIZES } from '../constants/theme'
import { StatusBar } from 'expo-status-bar'
import Button from '../components/ui/button'
import Carousel from '../components/carousel'
import tw from 'tailwind-react-native-classnames'
import carouselData from '../constants/carouselData'

const landingScreen = () => {
    return (
        <View>
          
                <Stack.Screen options={
                    {
                        headerShown: false,
                    }
                } />
                <View>
                    <View
                        style={{
                            backgroundColor: COLORS.lightWhite,
                           height: '70%',
                           alignContent: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <View
                            style={{
                            
                              
                                margin: SIZES.medium

                            }}
                        >

                        <Carousel
                        data={carouselData}
                        />
                    </View>
                    </View>
                    <View
                    style={{
                        backgroundColor: COLORS.primary,
                        // height: Dimensions.get('window').height / 3,
                           height: '30%',
                            alignContent: 'center',
                             justifyContent: 'center',
                             flexDirection: 'column',
                         
                    }}
                    >
                        <View style={{margin: SIZES.medium}}>

                        <Button onPress={() => router.push('login-screen')} variant="default">Login</Button>
                        <Button onPress={() => router.push('register-screen')}  variant="secondary">Register</Button>
                        </View>
                    </View>
                </View>

            
            <StatusBar style="dark" />
        </View>
    )
}

export default landingScreen