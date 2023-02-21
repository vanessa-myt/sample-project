import React from "react";
import { Button, Col } from "react-bootstrap";
import ReactLoading from "react-loading";

import "./Buttons.css";

function MYTCancelBtn({ size, actionFx, isClicked }) {
  return (
    <div className="mb-2">
      {isClicked ? (
        <Button className="action-btn cancel loader" size={size}>
          <ReactLoading type={"balls"} height={20} width={25} color="#fff" />
        </Button>
      ) : (
        <Button className="action-btn cancel" size={size} onClick={actionFx}>
          Cancel
        </Button>
      )}
    </div>
  );
}

export default MYTCancelBtn;
