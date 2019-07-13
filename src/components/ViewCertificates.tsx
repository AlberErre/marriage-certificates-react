import React, { ReactElement } from "react";
import Resolve from "./Certificates/Resolve";
import CheckResult from "./Certificates/CheckResult";
import CheckCertificate from "./Certificates/CheckCertificate";

interface Data {
  yourSelf: string;
  yourPartner: string;
}

interface ViewCertificates {
  view: number;
  msg: string;
  data: Data;
}

const ViewCertificates = (props: ViewCertificates): ReactElement => {
  if (props.view == 2) {
    return (
      <div className="box">
        <div className="forty image-container-certificates" />

        <div className="sixty form-container mobile-certificates">
          <p className="notice-container__subtitle">
            Here you can see your certificates
          </p>

          <CheckCertificate />
          <Resolve msg={props.msg} />
          <CheckResult data={props.data} />
        </div>
      </div>
    );
  } else {
    return <div />;
  }
};

export default ViewCertificates;
