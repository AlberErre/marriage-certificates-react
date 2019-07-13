import React, { ReactElement } from "react";
import Notice from "./Register/Notice";
import Response from "./Register/Response";
import MarriageCertificate from "./Register/MarriageCertificate";

interface ViewRegister {
  view: number;
  msg: string;
  getData: (e: Event) => void;
  onInputChange: (e: Event) => void;
}

const ViewRegister = (props: ViewRegister): ReactElement => {
  if (props.view === 1) {
    return (
      <div className="box">
        <div className="forty image-container-register" />

        <div className="sixty form-container">
          <MarriageCertificate
            getData={props.getData}
            onInputChange={props.onInputChange}
          />
          <Response msg={props.msg} />
          <Notice />
        </div>
      </div>
    );
  } else {
    return <div />;
  }
};

export default ViewRegister;
