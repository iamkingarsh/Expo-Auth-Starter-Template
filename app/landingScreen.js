import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { COLORS } from '../constants/theme'
import { StatusBar } from 'expo-status-bar'
import Button from '../components/button'

const landingScreen = () => {
    return (
        <View>
            <SafeAreaView>
                <Stack.Screen options={
                        {
                            headerShown: false,
                        }
                    } />
                <View>
                    <Text>landingScreen</Text>
                    <Button  variant="primary">Login</Button>
                    <Button  variant="secondary">Register</Button>
                </View>

            </SafeAreaView>
            <StatusBar style="dark" />
        </View>
    )
}

export default landingScreen