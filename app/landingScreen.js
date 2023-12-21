import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { COLORS } from '../constants/theme'
import { StatusBar } from 'expo-status-bar'

const landingScreen = () => {
    return (
        <View>
            <SafeAreaView>
                <Stack.Screen options={
                        {
                            headerShown: false,
                        }
                    } />
                <Text>index</Text>
            </SafeAreaView>
            <StatusBar style="dark" />
        </View>
    )
}

export default landingScreen