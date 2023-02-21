import React from "react";
import { Button, Col } from "react-bootstrap";
import ReactLoading from "react-loading";

import "./Buttons.css";

function MYTCreateBtn({ size, actionFx, isClicked }) {
  return (
    <div className="mb-2">
      {isClicked ? (
        <Button className="action-btn create loader" size={size}>
          <ReactLoading type={"balls"} height={20} width={25} color="#fff" />
        </Button>
      ) : (
        <Button className="action-btn create" size={size} onClick={actionFx}>
          Save
        </Button>
      )}
    </div>
  );
}

export default MYTCreateBtn;
