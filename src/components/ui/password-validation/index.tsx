import React from 'react';

export const checkPasswordValidity = (password: any) => {
    if (password.match(/[A-Z]/) === null) {
        return 'Password must have at least one Uppercase Character.';
    }
    if (password.match(/[!@#$%^&*]/) === null) {
        return 'Password must contain at least one Special Character.';
    }
    if (password.match(/[0-9]/) === null) {
        return 'Password must contain at least one Digit.';
    }
    if (password.length < 8) {
        return 'Password must be 8 or more characters long';
    }
    return null;
};
