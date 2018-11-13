import React from 'react'; 
import Resolve from './Certificates/Resolve';
import CheckResult from './Certificates/CheckResult';
import CheckCertificate from './Certificates/CheckCertificate';

const ViewCertificates = (props) => {
	if (props.view == 2) {

		return (
			<div className="box">
				<div className="forty image-container-certificates"></div>

				<div className="sixty form-container mobile-certificates">

				  <p className="notice-container__subtitle">
				  	Here you can see your certificates
				  </p>

				  <CheckCertificate />
				  <Resolve msg2={props.msg2} />
				  <CheckResult data={props.data} />
				</div>
			</div>
		);

	} else {

		return (
			<div></div>
		);
	}
};

export default ViewCertificates;
