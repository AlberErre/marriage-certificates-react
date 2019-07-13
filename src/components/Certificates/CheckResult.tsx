import React, { ReactElement } from "react";

interface Data {
  yourSelf: string;
  yourPartner: string;
}

interface CheckResult {
  data: Data;
}

const CheckResult = (props: CheckResult): ReactElement => {
  if (props.data.yourSelf !== "" && props.data.yourPartner !== "") {
    return (
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
    return <div />;
  }
};

export default CheckResult;
