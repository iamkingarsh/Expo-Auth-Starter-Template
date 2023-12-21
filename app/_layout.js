import { Text, View } from 'react-native';
import {
  SplashScreen,
  // This example uses a basic Layout component, but you can use any Layout.
  Slot,
  Stack,
} from 'expo-router';
import { useFonts, Inter_500Medium } from '@expo-google-fonts/inter';


SplashScreen.preventAutoHideAsync();


export default function Layout() {
  const [fontsLoaded, fontError] = useFonts({
    Inter_500Medium,
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
  return <Stack />;
}
