import React from 'react';
import { StyleSheet } from 'react-native';
import Colors from 'themes/Colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.appThemeSecondaryColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signInTextView: {
        paddingVertical: "4%",
    },
    signInText: {
        fontSize: 29,
        color: Colors.signInText,
        fontWeight: "bold"
    },
    signInImage: {
        width: 220,
        height: 70
    },
    emailStyles: {
        marginTop: 30,
        width: "95%",
        marginHorizontal: 11,
        borderColor: Colors.placeholderText,
    },
    passwordStyle: {
        marginTop: 20,
        marginHorizontal: 11,
        width: "95%",
        borderRadius: 25,
        borderColor: Colors.placeholderText,
    },
    textInputStyle: {
        fontSize: 16,
        fontWeight: "bold",
        color: Colors.placeholderText
    },
    forgotPasswordStyles: {
    },
    forgetPasswordText: {
        fontSize: 16,
        color: Colors.appTheme,
        fontWeight: "bold"
    },
    buttonStyles: {
        borderRadius: 30,
        backgroundColor: Colors.loginButton,
        padding: 12,
        width: "85%",
        alignItems: "center",
    },
    LoginContainer: {
        marginTop: "10%",
    },
    buttonText: {
        color: Colors.buttonLabel,
        fontWeight: "bold",
        fontSize: 18
    },
    ORtext: {
        fontWeight: "bold",
        marginTop: "10%",
        fontSize: 15,
        color: Colors.black
    },
    skipButton: {
        marginTop: "5%",
        alignItems: "center"

    },
    iconStyle: {
        left: 310,
        bottom: 30,
        color: Colors.appTheme
    }


});
