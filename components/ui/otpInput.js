import React, { useState, useRef } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { COLORS, SHADOWS } from '../../constants/theme';

const OtpInput = ({ length = 6, onOtpChange }) => {
    const [otp, setOtp] = useState('');
    const inputRefs = useRef([]);

    const handleOtpChange = (index, value) => {
        const newOtp = otp.split('');
        newOtp[index] = value;
        setOtp(newOtp.join(''));
        onOtpChange(newOtp.join(''));
        if (value && index < length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyPress = (index, key) => {
        if (key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const renderInputs = () => {
        const inputs = [];
        for (let i = 0; i < length; i++) {
            inputs.push(
                <TextInput
                    key={i}
                    style={[styles.input, SHADOWS.small, {borderColor: otp[i] ? COLORS.primary : COLORS.gray2, backgroundColor: otp[i] ? COLORS.tabWhite : COLORS.white}]}
                    maxLength={1}
                    keyboardType="numeric"
                    caretHidden = {true}
                    textContentType='oneTimeCode'
                    autoFocus={i === 0 ? true : false}
                    onChangeText={(value) => handleOtpChange(i, value)}
                    onKeyPress={({ nativeEvent: { key } }) => handleKeyPress(i, key)}
                    ref={(ref) => (inputRefs.current[i] = ref)}
                />
            );
        }
        return inputs;
    };

    return <View style={[styles.container, {gap: length == 6 ? 10 : 20 , justifyContent: length == 6 ? 'start' : 'start'}]}>{renderInputs()}</View>;
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        
    },
    input: {
        width: 60,
        height: 60,
        borderWidth: 1,
        backgroundColor: COLORS.white,
        borderColor: COLORS.gray2,
        borderRadius: 12,
        textAlign: 'center',
        fontSize: 16,
    },
});

export default OtpInput;
