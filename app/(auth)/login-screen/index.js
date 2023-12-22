import { View, Animated, TouchableOpacity, Text, SafeAreaView, ScrollView, Platform } from 'react-native'
import React, { useEffect } from 'react'
import { Stack } from 'expo-router'
import { APP_NAME, AUTH_TYPES, COLORS, FONT, SHADOWS, SIZES } from '../../../constants/theme'
import { SearchBar } from 'react-native-screens'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import LoginWithMobile from '../../../components/LoginWithMobile'
import LoginWithEmail from '../../../components/LoginWithEmail'
import tw from 'tailwind-react-native-classnames'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native-web'
import * as Haptics from 'expo-haptics';

const LoginScreen = () => {
  const tab = createMaterialTopTabNavigator()
  const [activeTab, setActiveTab] = React.useState('Mobile')


  const hapticFeedback = (type) => {
    if (type == 'success') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    else if (type == 'error') {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }
    else if (type == 'warning') {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
    }
    else if (type == 'selection') {
      Haptics.selectionAsync();
    }
    else if (type == 'heavy') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    }
    else if (type == 'medium') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }
    else {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
  };

  function MyTabBar({ state, descriptors, navigation, position }) {
    return (
      <View style={{ flexDirection: 'row', backgroundColor: COLORS.tabWhite, padding: SIZES.xxSmall, margin: SIZES.medium, borderRadius: SIZES.small }}>
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
            setActiveTab(route.name)
            hapticFeedback('medium')
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
              setActiveTab(route.name)
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
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={isFocused ? [{ flex: 1, alignItems: 'center', backgroundColor: COLORS.lightWhite, paddingVertical: SIZES.small, justifyContent: 'center', borderRadius: SIZES.small, }, SHADOWS.small] : { flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 100 }}
            >
              <Animated.Text style={isFocused ? [{ color: COLORS.tertiary, fontFamily: FONT.semiBold, fontSize: SIZES.medium }, { opacity }] : [{ color: COLORS.gray, fontFamily: FONT.semiBold, fontSize: SIZES.medium }, { opacity }]}>
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
          headerTitle: Platform.OS == 'ios' ? APP_NAME : APP_NAME,
          headerLargeTitle: false,
          headerStyle: {
            backgroundColor: COLORS.white2
          },
          headerLargeStyle: {
            backgroundColor: COLORS.white2
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: FONT.semiBold,
            fontSize: Platform.OS === 'ios' ? SIZES.medium : SIZES.large,
            color: COLORS.tertiary
          },
          headerBackTitleVisible: false,
          headerLargeTitleStyle: {
            fontFamily: FONT.bold,
            fontSize: SIZES.xLarge,
            color: COLORS.tertiary
          },
          headerTintColor: COLORS.tertiary,
          headerShadowVisible: false,
          headerBackVisible: true,
          gestureEnabled: false,

        }
      }
      />


      <SafeAreaView style={tw` bg-white h-full`}>

        <View style={tw`pt-4`}>
          <Text style={[tw`text-left  mx-4`, { fontFamily: FONT.bold, fontSize: Platform.OS === 'ios' ? SIZES.xxLarge : SIZES.xLarge }]}>
            Login to Your Account
          </Text>
          {AUTH_TYPES.MOBILE && AUTH_TYPES.EMAIL && <Text style={[tw`text-left mx-4 my-1`, { fontFamily: FONT.medium, color: COLORS.gray, fontSize: SIZES.medium }]}>
            {activeTab == 'Mobile' ? 'Login via Mobile' : 'Login via Email and Password'}
          </Text>}

          {AUTH_TYPES.MOBILE && !AUTH_TYPES.EMAIL && <Text style={[tw`text-left mx-4 my-1`, { fontFamily: FONT.medium, color: COLORS.gray, fontSize: SIZES.medium }]}>
            Login via Mobile
          </Text>}

          {!AUTH_TYPES.MOBILE && AUTH_TYPES.EMAIL && <Text style={[tw`text-left mx-4 my-1`, { fontFamily: FONT.medium, color: COLORS.gray, fontSize: SIZES.medium }]}>
            Login via Email and Password
          </Text>}
        </View>

        {AUTH_TYPES.MOBILE && AUTH_TYPES.EMAIL &&
          <NavigationContainer independent={true}>
            <tab.Navigator
              swipeEnabled={false}
              style={{ backgroundColor: COLORS.white2 }}
              initialRouteName="Mobile"
              tabBar={props => <MyTabBar {...props} />}
            >
              <tab.Screen name="Mobile" component={LoginWithMobile} />
              <tab.Screen name="Email" component={LoginWithEmail} />
            </tab.Navigator>
          </NavigationContainer>}

        {AUTH_TYPES.MOBILE && !AUTH_TYPES.EMAIL &&
          <LoginWithMobile />
        }

        {!AUTH_TYPES.MOBILE && AUTH_TYPES.EMAIL &&
          <LoginWithEmail />
        }



      </SafeAreaView>
    </>

  )
}

export default LoginScreen