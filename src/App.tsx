import React, { Component, useState } from "react";
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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      view: 1,
      msg: null,
      msg2: null
    };

    this.getData = this.getData.bind(this);
    this.getView = this.getView.bind(this);
  }

  getData(e) {
    e.preventDefault();
    let YourSelf = e.target.elements.YourSelf.value;
    let YourPartner = e.target.elements.YourPartner.value;

    if (YourSelf && YourPartner) {
      this.setState({
        msg:
          "Perfect! - Please confirm transaction on metamask to register your marriage."
      });
      // Insert function to send data to blockchain here
    } else {
      this.setState({
        msg: "You need to fill both names, your partner and yourself."
      });
    }
  }

  getView() {
    if (this.state.view == 1) {
      this.setState({
        view: 2
      });
    } else {
      this.setState({
        view: 1
      });
    }
  }

  render() {
    return (
      <div>
        <Particles params={ParticlesConfig} style={style_particle} />

        <div className="box-wrapper">
          <div className="main">
            <div className="container">
              <FlipButton func={this.getView} />

              <div className="innerContainer shadow">
                <ViewRegister
                  view={this.state.view}
                  msg={this.state.msg}
                  getData={this.getData}
                />

                <ViewCertificates
                  view={this.state.view}
                  data={this.state.data}
                  msg2={this.state.msg2}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
