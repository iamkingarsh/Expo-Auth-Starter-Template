import {
    SplashScreen,
    // This example uses a basic Layout component, but you can use any Layout.
    Slot,
    Stack,
} from 'expo-router';
import {
    useFonts,
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
} from '@expo-google-fonts/inter'; // add your fonts here
import { useEffect } from 'react';
import { APP_NAME, COLORS, FONT, SIZES } from '../constants/theme';
import { StatusBar } from 'expo-status-bar';


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
    }); // add your fonts here

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
    screenListeners={
        {
            didFocus: () => {
                StatusBar.setBarStyle('auto');
            },
        }
    }
                screenOptions={{
                    headerShown: true, // Set this to false to hide the header bar across the entire app
                    headerTitle: APP_NAME, // Set the header title 
                    headerLargeTitle: true, // Set this to true to use the large title iOS feature
                    headerStyle: {
                        backgroundColor: COLORS.tertiary, // Set your header color here
                    },
                    headerTitleAlign: 'center', // Set your header title alignment here (center, left, right). Default is center on iOS and left on Android.
                    headerTintColor: COLORS.tertiary, // Set your header text color here
                    headerLargeStyle: {
                        backgroundColor: COLORS.white, // Set your large header color here if different from headerStyle
                    },
                    headerLargeTintColor: COLORS.tertiary, // Set your large header text color here if different from headerTintColor
                    headerTitleStyle: {
                        fontSize: SIZES.medium,
                        color: COLORS.tertiary,
                        fontFamily: FONT.semiBold, // Set your header font family here
                    },
                    headerLargeTitleStyle: {
                        fontSize:SIZES.xxLarge,
                        color: COLORS.tertiary,
                        fontFamily: FONT.extraBold, // Set your large header font family here if different from headerTitleStyle
                    },
                    headerLeft: () => null, // Set your custom header left component here
                    headerRight: () => null, // Set your custom header right component here
                    headerBackButtonMenuEnabled: false, // Set this to true to show the menu icon when the back button is pressed on Android
                    headerBackTitleVisible: false, // Set this to true to show the back button title on iOS
                    headerBackTitle: 'Back', // Set your back button title here
                    headerHideShadow: false, // Set this to true to hide the header shadow
                    headerLargeTitleShadowVisible: true, // Set this to true to show the shadow on the large header
                    

                }}
            />;


}
