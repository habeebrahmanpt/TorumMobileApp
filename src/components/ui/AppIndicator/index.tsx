import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import Colors from '../../../themes/Colors';
import Styles from './style';

function AppIndicator(props: any) {
	return (
		<View style={Styles.appActivityContainer}>
			<ActivityIndicator
				{...props}
				color={
					props.color ? props.color : Colors.activityIndicatorColor
				}></ActivityIndicator>
		</View>
	);
}
export default AppIndicator;
