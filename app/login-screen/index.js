import { View, Animated, TouchableOpacity, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { COLORS, FONT, SHADOWS, SIZES } from '../../constants/theme'
import { SearchBar } from 'react-native-screens'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import LoginWithMobile from '../../components/LoginWithMobile'
import LoginWithEmail from '../../components/LoginWithEmail'
import tw from 'tailwind-react-native-classnames'
import { NavigationContainer } from '@react-navigation/native'

const LoginScreen = () => {
  const tab = createMaterialTopTabNavigator()
  function MyTabBar({ state, descriptors, navigation, position }) {
    return (
      <View style={{ flexDirection: 'row', backgroundColor: COLORS.tabWhite, padding:SIZES.small, margin: SIZES.medium, borderRadius: SIZES.large }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          const inputRange = state.routes.map((_, i) => i);
          const opacity = position.interpolate({
            inputRange,
            outputRange: inputRange.map(i => (i === index ? 1 : 1)),
          });
  
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={ isFocused ?  [{ flex: 1, alignItems: 'center', backgroundColor: COLORS.lightWhite, paddingVertical: SIZES.small, justifyContent: 'center', borderRadius: SIZES.small, }, SHADOWS.small] : { flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 100}}
            >
              <Animated.Text style={{ opacity }}>
                {label}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  return (
    <>


      <Stack.Screen options={
        {
          headerShown: true,
          headerTitle: 'Login to your account',
          headerLargeTitle: true,
          headerBackgroundStyle: {
            backgroundColor: COLORS.white2
          },
          headerLargeStyle: {
            backgroundColor: COLORS.white2
          },
          
          headerLargeTitleStyle: {
            fontFamily: FONT.semiBold,
            fontSize: SIZES.xxLarge,
            color: COLORS.black,
          },
          headerBackButtonMenuEnabled: true,
          headerTintColor: COLORS.tertiary,
          headerShadowVisible: false,
          headerBackVisible: true,
          gestureEnabled: false,

        }
      }
      />

      <SafeAreaView style={tw` bg-white h-full`}>
        <NavigationContainer  independent={true}>
          <tab.Navigator
            tabBar={props => <MyTabBar {...props} />}
          >
            <tab.Screen  name="Mobile" component={LoginWithMobile} />
            <tab.Screen name="Email" component={LoginWithEmail} />
          </tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>

  )
}

export default LoginScreen