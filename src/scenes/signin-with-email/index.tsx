import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import style from './style';
import { useDispatch, useSelector } from 'react-redux';
import ToastHelper from 'utils/toast-helper';
import CustomIcon from 'components/ui/custom-icon';
import Colors from 'themes/Colors';
import { InputTextField } from 'components/ui/text-input';
import { PrimaryButton } from 'components/ui/button';
import { checkEmailValidation } from 'components/ui/email-validation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LocalizedLabel from 'themes/LocalizedStrings';
import appImages from 'themes/Images';
import apiClient from 'api/api-client';
import { getUserDetails, setUser } from 'store/reducers/user-data';
import { getResetNavigation } from 'navigation/StackParamList';
 
function SignInWithEmail({ navigation }: any) {
    const [email, setEmail] = useState<string>("dasdasd@gmail.com");
    const [password, setPassword] = useState<string>("dsfafsdfsd");
    const [display, setDisplay] = useState<boolean>(true);
    const dispatch = useDispatch();
    const userData = useSelector(getUserDetails)


    useEffect(() => {
        if (userData) {
            navigateToHome();
        }
    }, [])

    const navigateToHome = () => {
        navigation.dispatch(getResetNavigation('Home'))
    }

    const failedToast = () => {
        ToastHelper.show(" User not exist ! \n Please enter valid Email and Password",);
    }
    const InvalidEmailToast = () => {
        ToastHelper.show(" Invalid Email ! \n Please enter valid Email and Password ");
    }
    const successToast = () => {
        ToastHelper.show(" You are Successfully LoggedIn");
    }
    const warningToast = () => {
        ToastHelper.show(" Enter a Valid Email and Password");
    }

    const signInHandler = () => {
        const requestObj = {
            user: { email: email, password: password }
        }
        apiClient.login(requestObj).then((response) => {
            console.log('API response : login', JSON.stringify(response?.data?.user))
            dispatch(setUser(response?.data?.user))
        }).catch((error) => {
            failedToast()
        })
    }
    const loginHandler = () => {
        if (email === ""
            || password === "") {
            warningToast();
        } else {
            checkEmailValidation(email);
            if (email) {
                signInHandler();
            }
            else {
                InvalidEmailToast();
            }
        }
    }

    const updateSecureTextEntry = () => {
        setDisplay(!display);
    }

    return (
        <View style={style.container}>
            <View style={style.signInTextView}>
                <Image style={style.signInImage}
                    source={appImages.appLogo}
                />
            </View>
            <View style={style.signInTextView}>
                <Text style={style.signInText}>{LocalizedLabel.signIn}</Text>
            </View>
            <View style={style.emailStyles}>
                <InputTextField
                    placeholder='E-mail'
                    setValue={setEmail}
                    value={email}
                />
            </View>
            <View style={style.passwordStyle}>
                <InputTextField
                    placeholder='Password'
                    setValue={setPassword}
                    value={password}
                    secureTextEntry={display ? true : false}
                />
                <TouchableOpacity onPress={() => updateSecureTextEntry()}>
                    {display ?
                        (
                            <Icon name='visibility' size={20} style={style.iconStyle} />
                        ) :
                        (
                            <Icon name='visibility-off' size={20} style={style.iconStyle} />
                        )
                    }
                </TouchableOpacity>

            </View>
            <View style={style.forgotPasswordStyles}>
                <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
                    <Text style={style.forgetPasswordText}>{LocalizedLabel.forgotPassword}</Text>
                </TouchableOpacity>
            </View>
            <View style={style.LoginContainer}>
                <PrimaryButton
                    label={LocalizedLabel.login}
                    onPress={() => loginHandler()} />

            </View >
            <Text style={style.ORtext}>{LocalizedLabel.or}</Text>
            <TouchableOpacity style={style.skipButton} onPress={navigateToHome}>
                <Text style={[style.buttonText, { color: Colors.appTheme }]}>{LocalizedLabel.skipLogin}</Text>
            </TouchableOpacity>
        </View >
    );
}
export default SignInWithEmail;
