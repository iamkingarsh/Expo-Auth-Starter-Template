import React from 'react';
import { View, ScrollView, Dimensions, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { COLORS } from '../constants/theme';

const Carousel = ({ children,  ...props }) => {
    const screenWidth = Dimensions.get('window').width;

    return (
        <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            style={[tw`bg-red-500 w-full rounded-md p-4 h-60`, {backgroundColor: COLORS.white},  props.style]}
            {...props}
        >

            {children.map((child, index) => (
            <SafeAreaView key={index} style={[tw` `, {color: COLORS.gray},  props.style]} >
                <View style={tw`w-full`}>
                    {child}
                </View>
            </SafeAreaView>
            ))}
        </ScrollView>
    );
};

export default Carousel;
