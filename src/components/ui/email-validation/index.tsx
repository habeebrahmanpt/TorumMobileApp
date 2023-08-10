import React from "react";

export const checkEmailValidation = (email: string) => {
	let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (email && regex.test(email)) {
		return true;
	}
	else {
		return false;
	}
}




