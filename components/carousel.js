import React from 'react';
import { View, ScrollView, Dimensions, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const Carousel = ({ children,  ...props }) => {
    const screenWidth = Dimensions.get('window').width;

    return (
        <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            style={[tw`bg-red-500`, { width: screenWidth}, props.style]}
            {...props}
        >

            {children.map((child, index) => (
            <SafeAreaView key={index} style={{ width: screenWidth }} >
                <View style={{ width: screenWidth }}>
                    {child}
                </View>
            </SafeAreaView>
            ))}
        </ScrollView>
    );
};

export default Carousel;
