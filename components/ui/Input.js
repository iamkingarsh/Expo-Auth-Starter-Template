import React, { useEffect, useState } from 'react';
import { Text,View, TextInput } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { COLORS, FONT, SIZES } from '../../constants/theme';
import * as Haptics from 'expo-haptics';
import { EyeIcon, EyeSlashIcon, SparklesIcon, SparklesIcon as SparklesIconOutline } from "react-native-heroicons/outline";

const Input = ({ type, label, labelTitle, ...props }) => {
    const [value, setValue] = useState(props.value ? props.value : '');
    const [error, setError] = useState(false); 
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(true);

    useEffect(() => {
        if (type === 'phone' && value.length > 10) {
            setError(true);
            setErrorMessage('Mobile number should be 10 digits');
        }   else if (type === 'email' && value.length > 4 && !value.includes('@')) {
            setError(true);
            setErrorMessage('Invalid email address');
        }        
        else {
            setError(false);
            setErrorMessage('');
        }
    }, [value]);
    


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
            secureTextEntry={type === 'password'  && showPassword ? true : false}
            selectionColor={COLORS.primary}
            value={value}
            onChangeText={(text) => { setValue(text); props.onChangeText && props.onChangeText(text); }}        
            onBlur={() => {
                props.onBlur && props.onBlur();
            }}
            style={[tw`px-4 py-3 rounded-lg `, {borderRadius:SIZES.small,  fontFamily: FONT.regular, fontSize:SIZES.medium,  borderColor:COLORS.gray2, borderWidth:1, backgroundColor: COLORS.white }, props.style]}
            keyboardType={keyboardType}
            {...props}
            />
            {type === 'password' && 
               (showPassword ?  <EyeIcon onPress={()=> setShowPassword(!showPassword)} style={[tw`absolute right-3 top-3`]} width={23} height={23} color={COLORS.gray} /> : <EyeSlashIcon onPress={()=> setShowPassword(!showPassword)}  style={[tw`absolute right-3 top-3`]} width={23} height={23} color={COLORS.gray} />)
          
            }
            </View>
            {error && <Text style={[tw`text-sm text-red-500`, { fontFamily: FONT.medium }]}>{errorMessage}</Text>}

            </>
    );
};

export default Input;
