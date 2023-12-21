import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { COLORS, FONT, SIZES } from '../../constants/theme';

const Button = ({ variant, onPress, children, ...props }) => {

    const [buttonStyle, setButtonStyle] = useState(() => {
        switch (variant) {
            case 'primary':
                return [tw`px-8 py-5 mx-4 my-2 rounded-2xl`, {backgroundColor: COLORS.primary}, props.style, ];
            case 'secondary':
                return [tw`px-8 py-5 mx-4 my-2 rounded-2xl`,{backgroundColor: COLORS.tertiary}, props.style];
            default:
                return [tw`px-8 py-5 mx-4 my-2 rounded-2xl`,{backgroundColor: COLORS.white}, props.style];
        }
    });

    const [textStyle, setTextStyle] = useState(() => {
        switch (variant) {
            case 'primary':
                return [tw`text-center `, {color: COLORS.white, fontFamily: FONT.semiBold, fontSize: SIZES.medium}, props.style];
            case 'secondary':
                return [tw`text-center `, {color: COLORS.white, fontFamily: FONT.semiBold, fontSize: SIZES.medium}, props.style];
            default:
                return [tw`text-center `, {color: COLORS.black, fontFamily: FONT.semiBold, fontSize: SIZES.medium}, props.style];
        }
    });

    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress} {...props}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

export default Button;
