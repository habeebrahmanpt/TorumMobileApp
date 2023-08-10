import React from 'react';
import style from './style';
import { TextInput } from 'react-native';
import Colors from '../../../themes/Colors';

interface PropTypes {
    style?: any;
    setValue?: any;
    value?: string;
    placeholder?: string;
    function?: any;
    secureTextEntry?: boolean;
}

export function InputTextField(props: PropTypes) {
    const onChange = (value: any) => {
        if (props.setValue) {
            props.setValue(value);
        }
    };

    const onBlur = () => {
        if (props.function) {
            props.function();
        }
    };

    return (
        <TextInput
            placeholderTextColor={Colors.placeholderText}
            secureTextEntry={props.secureTextEntry}
            onChangeText={value => {
                onChange(value);
            }}
            style={props.style ? props.style : style.textInputStyle}
            placeholder={props.placeholder ? props.placeholder : ''}
            value={props.value ? props.value : ''}
            onBlur={() => onBlur()}
        />
    );
}
