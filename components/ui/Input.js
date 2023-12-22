import React from 'react';
import { TextInput } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { COLORS, FONT, SIZES } from '../../constants/theme';
import * as Haptics from 'expo-haptics';

const Input = ({ type, ...props }) => {
    let keyboardType = 'default';

    if (type === 'numeric') {
        keyboardType = 'numeric';
    }

    const hapticFeedback = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    };

    return (
        <TextInput
            placeholderTextColor={COLORS.gray2}
            onFocus={() => {
                props.onFocus && props.onFocus();
            }}
            keyboardAppearance='light'
            onKeyPress={() => {
                props.onKeyPress && props.onKeyPress();
                hapticFeedback();
            }}
            selectionColor={COLORS.primary}
            value={props.value}
            onChangeText={props.onChangeText}            
            onBlur={() => {
                props.onBlur && props.onBlur();
            }}
            style={[tw`px-4 py-4 rounded-lg `, {borderRadius:SIZES.small,  fontFamily: FONT.regular, fontSize:SIZES.medium,  borderColor:COLORS.gray2, borderWidth:1, backgroundColor: COLORS.white }, props.style]}
            keyboardType={keyboardType}
            {...props}
        />
    );
};

export default Input;
