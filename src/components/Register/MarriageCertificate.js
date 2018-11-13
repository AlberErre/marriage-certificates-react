import React from "react";

const MarriageCertificate = () => {

	return(
		<form>
			<input type="text" name="YourSelf" placeholder="Your name..."/>
			<input type="text" name="YourPartner" placeholder="Your partner..."/>
			<button className="button-right">Certificate your love</button>
		</form>
	);
};

export default MarriageCertificate;