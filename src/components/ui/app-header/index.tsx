import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './style';
import CustomIcon from '../custom-icon';
import Colors from '../../../themes/Colors'; 

interface PropTypes {
    style?: any;
    leftIcon?: any;
    onPressLeft?: any;
    rightIcon?: any;
    onPressRight?: any;
    label: string;
    previousScreen?: string;
    previousScreenStyle?: any;
    nextScreen?: string;
    rightIconColor?: any;
    leftIconColor?: any;
}

export default function AppHeader(props: PropTypes) {
    return (
        <View style={props.style ? props.style : styles.container}>
            {(props.leftIcon || props.previousScreen) && (
                <TouchableOpacity
                    style={styles.leftIcon}
                    onPress={props.onPressLeft ? props.onPressLeft : null}>
                    {props.leftIcon ? (
                        <CustomIcon
                            name={props.leftIcon}
                            color={props.leftIconColor ? props.leftIconColor : Colors.black}
                            size={23}
                        />
                    ) : null}
                    {props.previousScreen && (
                        <Text style={props.previousScreenStyle ? props.previousScreenStyle : styles.previousScreenLabel}>
                            {props.previousScreen}
                        </Text>
                    )}
                </TouchableOpacity>
            )}
            <Text style={styles.title}>{props.label}</Text>
            {props.rightIcon || props.nextScreen ? (
                <TouchableOpacity
                    style={styles.rightIcon}
                    onPress={props.onPressRight ? props.onPressRight : null}>
                    {props.rightIcon ? (<CustomIcon
                        name={props.rightIcon}
                        color={props.rightIconColor ? props.rightIconColor : Colors.black}
                        size={23}
                    />) : null}
                    {props.nextScreen && (
                        <Text style={styles.nextScreenLabel}>
                            {props.nextScreen}
                        </Text>
                    )}
                </TouchableOpacity>
            ) : null}
        </View>
    );
}
