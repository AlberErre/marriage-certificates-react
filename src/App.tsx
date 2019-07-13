import React, { useState, ReactNode } from "react";
import FlipButton from "./components/FlipButton";
import ViewRegister from "./components/ViewRegister";
import ViewCertificates from "./components/ViewCertificates";
import Particles from "react-particles-js";
import ParticlesConfig from "./assets/etherMarriage-particles.json";

const style_particle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: -1
};

interface JsonArray
  extends Array<string | number | boolean | Date | Json | JsonArray> {}

interface Json {
  [x: string]: string | number | boolean | Date | Json | JsonArray;
}

const App = (): ReactNode => {
  const [data, setData] = useState({
    yourSelf: "",
    yourPartner: ""
  });
  const [view, setView] = useState(1);
  const [registerMsg, setRegisterMsg] = useState("");
  const [certificateMsg, setCertificateMsg] = useState("");

  const getData = (e: Event): void => {
    e.preventDefault();
    let message: string =
      data.yourSelf !== "" && data.yourPartner !== ""
        ? "Perfect! - Please confirm transaction on metamask to register your marriage."
        : "You need to fill both names, your partner and yourself.";
    setRegisterMsg(message);
    // Insert function to send data to blockchain here
  };

  const onInputChange = (e: Event): void => {
    e.preventDefault();
    let name: string = (e.target as HTMLInputElement).name;
    let value: string = (e.target as HTMLInputElement).value;
    setData({ ...data, [name]: value });
  };

  const getView = (): void => {
    view == 1 ? setView(2) : setView(1);
  };

  return (
    <div>
      <Particles params={ParticlesConfig as Json} style={style_particle} />

      <div className="box-wrapper">
        <div className="main">
          <div className="container">
            <FlipButton setView={getView} />

            <div className="innerContainer shadow">
              <ViewRegister
                view={view}
                msg={registerMsg}
                getData={getData}
                onInputChange={onInputChange}
              />

              <ViewCertificates view={view} data={data} msg={certificateMsg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
