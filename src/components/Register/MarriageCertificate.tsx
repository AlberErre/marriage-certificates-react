import React, { ReactElement, FormEvent, ChangeEvent } from "react";

interface MarriageCertificate {
  getData: (e: FormEvent<HTMLFormElement>) => void;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const MarriageCertificate = (props: MarriageCertificate): ReactElement => {
  return (
    <form onSubmit={props.getData}>
      <input
        type="text"
        name="yourSelf"
        onChange={props.onInputChange}
        placeholder="Your name..."
      />
      <input
        type="text"
        name="yourPartner"
        onChange={props.onInputChange}
        placeholder="Your partner..."
      />
      <button className="button-right">Certificate your love</button>
    </form>
  );
};

export default MarriageCertificate;
