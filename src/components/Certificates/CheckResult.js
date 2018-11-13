import React from 'react'; 

const CheckResult = (props) => {

	if (props.data != null) {

	  return(
		<div className="view-certificate-output">
			<div className="eth-output-info">
				The following marriage is registered on Ethereum, forever.
			</div>
			<div className="result-container">
				<div className="eth-output">Will Smith</div>
				<div className="eth-output">&</div>
				<div className="eth-output">Jada Smith</div>
			</div>
		</div>
	   );

	} else {

		return (
			<div></div>
		);
	}
};

export default CheckResult;