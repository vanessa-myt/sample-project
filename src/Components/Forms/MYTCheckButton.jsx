import React from "react";
import { Form, Row, Col } from "react-bootstrap";

import "./Forms.css";

function MYTCheckButton({
  required = true,
  type,
  formLabel,
  labels = [],
  name,
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
              {["checkbox"].map((type) => (
                <div
                  key={`inline-${type}`}
                  className="mb-3 align-left justify-content-between"
                >
                  {labels.map((data, key) => {
                    return (
                      <Form.Check
                        inline
                        label={data.label}
                        name={`${data.name}-${key}`}
                        value={data.label}
                        onChange={onchange}
                        type={type}
                        id={`inline-${type}-${key}`}
                      />
                    );
                  })}
                </div>
              ))}
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
            <div className="align-left">
              {["checkbox"].map((type) => (
                <div key={`block-${type}`} className="mb-3">
                  {labels.map((data, key) => {
                    return (
                      <Form.Check
                        inline
                        label={data.label}
                        name={`${name}-${key}`}
                        value={data.label}
                        onChange={onChange}
                        type={type}
                        id={`block-${type}-${key}`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </Form.Group>
        </>
      )}
    </Form>
  );
}

export default MYTCheckButton;
