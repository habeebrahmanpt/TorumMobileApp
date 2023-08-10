import React from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../../../themes/Colors';

export const styles = StyleSheet.create({
    primaryButton: {
        height: 46,
        width: 285,
        backgroundColor: Colors.Primary,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonDisabled: {
        height: 46,
        width: 285,
        backgroundColor: Colors.Primary,
        opacity: 0.5,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    primaryText: {
        fontSize: 17,
        color: Colors.Secondary,
    },
    secondaryButton: {
        backgroundColor: Colors.Secondary,
        borderColor: Colors.Primary,
        borderRadius: 25,
        borderWidth: 1,
        height: 54,
        width: 280,
        alignItems: 'center',
        justifyContent: 'center',
    },
    secondaryText: {
        fontSize: 20,
        color: Colors.Primary,
    },
});
