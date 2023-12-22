import React, { useEffect, useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { COLORS, FONT, SIZES } from '../../constants/theme';
import * as Haptics from 'expo-haptics';
import { EyeIcon, EyeSlashIcon, SparklesIcon, SparklesIcon as SparklesIconOutline } from "react-native-heroicons/outline";

const Input = ({ type, onTextChange, label, setInputError, setInputErrorMessage, labelTitle, ...props }) => {
    const [value, setValue] = useState(props.value ? props.value : '');
    const [error, setError] = useState(setInputError ? setInputError : false);
    const [errorMessage, setErrorMessage] = useState(setInputErrorMessage ? setInputErrorMessage : '');
    const [showPassword, setShowPassword] = useState(true);

    useEffect(() => {
        if (type === 'phone') {
            setError(setInputError ? setInputError : false);
            setErrorMessage(setInputErrorMessage ? setInputErrorMessage : '');
        } else if (type === 'email' ) {
            setError(setInputError ? setInputError : false);
            setErrorMessage(setErrorMessage ? setInputErrorMessage : '');
        } else if (type === 'password') {
            setError(setInputError ? setInputError : false);
            setErrorMessage(setInputErrorMessage ? setInputErrorMessage : '');
        }
    }, [value, setInputError, setInputErrorMessage]);



    let keyboardType = 'default';

    if (type === 'numeric') {
        keyboardType = 'numeric';
    }

    if (type === 'email') {
        keyboardType = 'email-address';
    }

    if (type === 'phone') {
        keyboardType = 'phone-pad';
    }

    const hapticFeedback = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    };

    return (
        <>
            {label && (
                <Text style={[tw`text-sm `, { fontFamily: FONT.medium, color: COLORS.gray }]}>{labelTitle ? labelTitle : ''}</Text>
            )}
            <View style={[tw`relative`]}>

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
                    secureTextEntry={type === 'password' && showPassword ? true : false}
                    selectionColor={COLORS.primary}
                    value={value}
                    onChangeText={(text) => { setValue(text); onTextChange && onTextChange(text); }}
                    onBlur={() => {
                        props.onBlur && props.onBlur();
                    }}
                    style={[tw`px-4 py-3 rounded-lg `, { borderRadius: SIZES.small, fontFamily: FONT.regular, fontSize: SIZES.medium, borderColor: COLORS.gray2, borderWidth: 1, backgroundColor: COLORS.white }, props.style]}
                    keyboardType={keyboardType}
                    {...props}
                />
                {type === 'password' &&
                    (showPassword ? <EyeIcon onPress={() => setShowPassword(!showPassword)} style={[tw`absolute right-3 top-3`]} width={23} height={23} color={COLORS.gray} /> : <EyeSlashIcon onPress={() => setShowPassword(!showPassword)} style={[tw`absolute right-3 top-3`]} width={23} height={23} color={COLORS.gray} />)

                }
            </View>
            {error && <Text style={[tw`text-sm text-red-500`, { fontFamily: FONT.medium }]}>{errorMessage}</Text>}

        </>
    );
};

export default Input;
