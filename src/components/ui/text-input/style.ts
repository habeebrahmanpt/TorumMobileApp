import React from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../../../themes/Colors';

export default StyleSheet.create({
    textInputStyle: {
        maxHeight: '100%',
        maxWidth: '100%',
        borderWidth: 1.5,
        borderColor: Colors.chatContainer,
        height: 43,
        marginHorizontal: 26,
        width: '85%',
        paddingHorizontal: 15,
        borderRadius: 20,
    },
});
