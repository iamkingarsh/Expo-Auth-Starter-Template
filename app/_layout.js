import {
    SplashScreen,
    // This example uses a basic Layout component, but you can use any Layout.
    Slot,
    Stack,
} from 'expo-router';
import { useFonts, 
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black, } from '@expo-google-fonts/inter';
import { useEffect } from 'react';


SplashScreen.preventAutoHideAsync();


export default function Layout() {
    const [fontsLoaded, fontError] = useFonts({

        Inter_100Thin,
        Inter_200ExtraLight,
        Inter_300Light,
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_800ExtraBold,
        Inter_900Black,
    });

    useEffect(() => {
        if (fontsLoaded || fontError) {
            // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    // Prevent rendering until the font has loaded or an error was returned
    if (!fontsLoaded && !fontError) {
        return null;
    }

    // Render the children routes now that all the assets are loaded.
    return <Stack
        screenOptions={{
            headerStyle: {
                backgroundColor: '#fff',
                shadowColor: 'transparent',
            },
            headerTintColor: '#000',
        }}
    />;
}
