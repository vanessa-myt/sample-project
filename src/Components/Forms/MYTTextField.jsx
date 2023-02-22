import React from "react";
import { Form, Row, Col } from "react-bootstrap";

import "./Forms.css";

function MYTTextField({
  required,
  type,
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
              <Form.Control
                type="text"
                placeholder={placeholder}
                size={size}
                name={name}
                value={value}
                onChange={onChange}
              />
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

export default MYTTextField;
