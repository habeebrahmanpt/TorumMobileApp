import { CommonActions } from "@react-navigation/native";

export type StackParamList = {
    SignInWithEmail: undefined;
    Home: undefined;
    FeedDetails:undefined;
};

export const getResetNavigation = (name: string) => {
    return CommonActions.reset({ index: 0, routes: [{ name: name }] })
}