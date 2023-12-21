import { View, Text, SafeAreaView, Dimensions } from 'react-native'
import React from 'react'
import { Stack, router } from 'expo-router'
import { COLORS, SIZES } from '../constants/theme'
import { StatusBar } from 'expo-status-bar'
import Button from '../components/ui/button'
import Carousel from '../components/carousel'

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
                                backgroundColor: COLORS.primary,
                                height: '10%',
                            margin: SIZES.medium

                            }}
                        >

                        <Carousel
                            style={{
                                height: '10%',
                            }}
                            >
                            <View>
                                <Text>1</Text>
                            </View>
                            <View>
                                <Text>2</Text>
                            </View>
                            <View>
                                <Text>3</Text>
                            </View>
                        </Carousel>
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

                        <Button onPress={() => router.push('login-screen')} variant="default">Login</Button>
                        <Button variant="secondary">Register</Button>
                    </View>
                </View>

            
            <StatusBar style="dark" />
        </View>
    )
}

export default landingScreen