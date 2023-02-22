import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Form, Row, Col, InputGroup } from "react-bootstrap";

import "./Forms.css";

function MYTNumberField({
  required,
  type,
  sideInput,
  sideInputType,
  sideInputValue,
  formLabel,
  size,
  placeholder,
  name,
  value,
  onChange,
}) {
  return (
    <Form>
      {type === "inline" ? (
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Row>
            <Col sm={4}>
              <Form.Label className="p-1 form-label align-left">
                {formLabel}
                {required && <span className="badge">*</span>}
              </Form.Label>
            </Col>
            <Col sm={6}>
              <InputGroup size={size} className="mb-3">
                {sideInput && (
                  <InputGroup.Text>
                    {sideInputType === "icon" ? (
                      <FontAwesomeIcon
                        icon={sideInputValue}
                        alt={"eye"}
                        // className={showPassword ? "eye-login" : "eye-slash-login"}
                        aria-hidden="true"
                      />
                    ) : (
                      <text>{sideInputValue}</text>
                    )}
                  </InputGroup.Text>
                )}
                <Form.Control
                  type="number"
                  placeholder={placeholder}
                  size={size}
                  name={name}
                  value={value}
                  onChange={onChange}
                />
                {/* <InputGroup.Text>.00</InputGroup.Text> */}
              </InputGroup>
            </Col>
          </Row>
        </Form.Group>
      ) : (
        <>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="align-left ml-2 form-label">
              {formLabel}
              {required && <span className="badge">*</span>}
            </Form.Label>
            <Form.Control
              type="text"
              placeholder={placeholder}
              size={size}
              name={name}
              value={value}
              onChange={onChange}
            />
          </Form.Group>
        </>
      )}
    </Form>
  );
}

export default MYTNumberField;
