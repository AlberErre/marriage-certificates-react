import React, { ReactElement } from "react";

interface FlipButton {
  setView: () => void;
}

const FlipButton = (props: FlipButton): ReactElement => {
  return (
    <button className="button-view" onClick={props.setView}>
      Change view
    </button>
  );
};

export default FlipButton;
