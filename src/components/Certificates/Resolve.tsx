import React, { ReactElement } from "react";

interface Resolve {
  msg: string;
}

const Resolve = (props: Resolve): ReactElement => (
  <div className="msg_style">
    <p>{props.msg}</p>
  </div>
);

export default Resolve;
