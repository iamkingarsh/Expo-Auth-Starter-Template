import React, { useState, useRef } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';

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
                    style={styles.input}
                    maxLength={1}
                    keyboardType="numeric"
                    onChangeText={(value) => handleOtpChange(i, value)}
                    onKeyPress={({ nativeEvent: { key } }) => handleKeyPress(i, key)}
                    ref={(ref) => (inputRefs.current[i] = ref)}
                />
            );
        }
        return inputs;
    };

    return <View style={styles.container}>{renderInputs()}</View>;
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
    },
    input: {
        width: 40,
        height: 40,
        borderWidth: 1,
        backgroundColor: COLORS.tabWhite,
        borderColor: COLORS.gray,
        borderRadius: 4,
        textAlign: 'center',
        fontSize: 16,
    },
});

export default OtpInput;
