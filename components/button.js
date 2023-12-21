import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { COLORS, FONT, SIZES } from '../constants/theme';

const Button = ({ variant, onPress, children, ...props }) => {

    const [buttonStyle, setButtonStyle] = useState(() => {
        switch (variant) {
            case 'primary':
                return [tw`px-8 py-3 mx-3 my-1 rounded-md`, {backgroundColor: COLORS.primary}, props.style];
            case 'secondary':
                return [tw`px-8 py-3 mx-3 my-1 rounded-md`,{backgroundColor: COLORS.secondary}, props.style];
            default:
                return [tw`px-8 py-3 mx-3 my-1 rounded-md`,{backgroundColor: COLORS.tertiary}, props.style];
        }
    });

    const [textStyle, setTextStyle] = useState(() => {
        switch (variant) {
            case 'primary':
                return [tw`text-center `, {color: COLORS.white, fontFamily: FONT.semiBold, fontSize: SIZES.medium}, props.style];
            case 'secondary':
                return [tw`text-center `, {color: COLORS.white, fontFamily: FONT.semiBold, fontSize: SIZES.medium}, props.style];
            default:
                return [tw`text-center `, {color: COLORS.white, fontFamily: FONT.semiBold, fontSize: SIZES.medium}, props.style];
        }
    });

    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress} {...props}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

export default Button;
