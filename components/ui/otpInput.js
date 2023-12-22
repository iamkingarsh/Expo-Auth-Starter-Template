import React, { useState, useRef, useEffect } from 'react';
import { TextInput, View, StyleSheet, Keyboard } from 'react-native';
import { COLORS, SHADOWS, SIZES } from '../../constants/theme';
import { KeyboardAvoidingView } from 'react-native-web';

const OtpInput = ({ length = 6, value,  onOtpChange }) => {
    const [otp, setOtp] = useState('');
    const inputRefs = useRef([]);

    useEffect(() => {
        if (otp.length === length) {
          Keyboard.dismiss();
        }
      }, [otp, length]);

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
                    style={[styles.input, SHADOWS.small, {borderColor: otp[i] ? COLORS.primary : COLORS.gray2, backgroundColor: otp[i] ? COLORS.tabWhite : COLORS.white, width: length == 6 ? 50 : 60, height: length == 6 ? 50 : 60, fontSize: length == 6 ? SIZES.large : SIZES.large, borderRadius: length == 6 ? 12 : 12,	}]}
                    maxLength={1}
                    enablesReturnKeyAutomatically={true}
                    keyboardType="number-pad"
                    caretHidden = {true}
                    textContentType='oneTimeCode'
                    // autoFocus={i === 0 ? true : false}
                    focusable={true}
                    keyboardAppearance='light'
                    
                    collapsable={true}
                    value={value && value[i] ? value[i] : ''}
                    onChangeText={(value) => {handleOtpChange(i, value)}}
                    onKeyPress={({ nativeEvent: { key } }) => handleKeyPress(i, key)}
                    ref={(ref) => (inputRefs.current[i] = ref)}
                    contextMenuHidden={true}
                    returnKeyType='done'
                    blurOnSubmit={false}
                    onSubmitEditing={() => {
                        
                          Keyboard.dismiss();
                       
                      }}
                />
           

            );
        }
        return inputs;
    };

    return <View style={[styles.container, {gap: length == 6 ? 10 : 20 , justifyContent: length == 6 ? 'start' : 'start'}]}>{renderInputs()}</View>

};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        
    },
    input: {
       
        borderWidth: 1,
        backgroundColor: COLORS.white,
        borderColor: COLORS.gray2,
        borderRadius: 12,
        textAlign: 'center',
        fontSize: 16,
    },
});

export default OtpInput;
