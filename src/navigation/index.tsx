import React from 'react';
import { CommonActions, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackParamList } from './StackParamList';
import HomeScreen from 'scenes/home';
import SignInWithEmail from 'scenes/signin-with-email';
import FeedDetails from 'scenes/feedDetails';

const Stack = createNativeStackNavigator<StackParamList>();
const RootNavigation = (): JSX.Element => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name={'SignInWithEmail'}
                    component={SignInWithEmail}
                />
                <Stack.Screen name={'Home'} component={HomeScreen} />
                <Stack.Screen name={'FeedDetails'} component={FeedDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default RootNavigation;
