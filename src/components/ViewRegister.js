import React from 'react'; 
import Notice from './Register/Notice';
import Response from './Register/Response';
import MarriageCertificate from './Register/MarriageCertificate';

const ViewRegister = (props) => {
	if (props.view == 1) {
		return (
			<div className="box">
				<div className="forty image-container-register"></div>

				<div className="sixty form-container">
				  <MarriageCertificate getData={props.getData} />
				  <Response 
				    msg={props.msg}
				  />
				  <Notice />
				</div>
			</div>
		);
	} else {
		return (
			<div></div>
		);
	}
};

export default ViewRegister;