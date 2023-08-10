import React from 'react';
import { styles } from './style';
import { Text, TouchableOpacity } from 'react-native';
interface PropTypes {
	style?: any;
	buttonLabelStyle?: any;
	label: any;
	onPress?: any;
	disabled?: boolean;
}

export function PrimaryButton(props: PropTypes) {
	const onClick = () => {
		if (props.onPress) {
			props.onPress();
		}
	};

	return (
		<TouchableOpacity
			disabled={props.disabled ? true : false}
			style={props.style ? props.style : props.disabled ? styles.buttonDisabled : styles.primaryButton}
			onPress={onClick}>
			<Text
				style={
					props.buttonLabelStyle ? props.buttonLabelStyle : styles.primaryText
				}>
				{props.label}
			</Text>
		</TouchableOpacity>
	);
}

export function SecondaryButton(props: PropTypes) {
	const onClick = () => {
		if (props.onPress) {
			props.onPress();
		}
	};

	return (
		<TouchableOpacity
			style={props.style ? props.style : styles.secondaryButton}
			onPress={onClick}>
			<Text
				style={
					props.buttonLabelStyle ? props.buttonLabelStyle : styles.secondaryText
				}>
				{props.label}
			</Text>
		</TouchableOpacity>
	);
}
