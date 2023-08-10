import React from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../../../themes/Colors';

export const styles = StyleSheet.create({
	container: {
		height: 55,
		flexDirection: 'row',
		backgroundColor: Colors.appThemeSecondaryColor,
		alignItems: 'center',
		justifyContent: 'center',
		borderBottomWidth: 1,
		borderColor: '#e0e0e0',
		// marginBottom: 8,
	},
	rightIcon: {
		position: 'absolute',
		fontWeight: 'bold',
		top: 15,
		right: 18,
	},
	leftIcon: {
		position: 'absolute',
		top: 15,
		left: 12,
		flexDirection: 'row',
		alignItems: 'center',
		// justifyContent:"center"
	},
	previousScreenLabel: {
		fontSize: 18,
		color: Colors.black,
		// paddingHorizontal:5,
	},
	title: {
		color: Colors.black,
		fontSize: 18,
		fontWeight: 'bold',
	},
	nextScreenLabel: {
		fontSize: 18,
		color: Colors.appTheme,
		paddingHorizontal: 5,
	}
});
