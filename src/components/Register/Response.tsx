import React, { ReactElement } from "react";

interface Output {
  msg: string;
}

const Output = (props: Output): ReactElement => (
  <div className="msg_style">
    <p>{props.msg}</p>
  </div>
);

export default Output;
