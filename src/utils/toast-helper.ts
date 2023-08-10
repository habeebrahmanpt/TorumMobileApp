import Toast from 'react-native-simple-toast';
export enum ToastLength {
    SHORT = Toast.SHORT,
    LONG = Toast.LONG,
}

export default class ToastHelper {
    static show(message: string, toastLength = ToastLength.SHORT): void {
        Toast.show(message, toastLength);
    }
}
