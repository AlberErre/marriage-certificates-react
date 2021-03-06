import React, { ReactElement } from "react";

const CheckCertificate = (): ReactElement => (
  <form>
    <input
      className="long"
      type="text"
      name="inputAddress"
      placeholder="Check certificate by address..."
    />
    <button className="button-right mobile-buttom">Check Certificate</button>
  </form>
);

export default CheckCertificate;
