import React from "react";
import { Button, Col } from "react-bootstrap";
import ReactLoading from "react-loading";

import "./Buttons.css";

function MYTCancelBtn({ size, onClick, isClicked }) {
  return (
    <div className="mb-2">
      {isClicked ? (
        <Button className="action-btn cancel loader" size={size}>
          <ReactLoading type={"balls"} height={20} width={25} color="#fff" />
        </Button>
      ) : (
        <Button className="action-btn cancel" size={size} onClick={onClick}>
          Cancel
        </Button>
      )}
    </div>
  );
}

export default MYTCancelBtn;
