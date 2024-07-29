import React from "react";
import Row from "../layout/Row";
import FieldInput from "./FieldInput";

function AddressInput({ style, labelStyle }) {
  return (
    <Row>
      <FieldInput
        label={"Building Number and Street Name"}
        width="1.61in"
        style={[style, { marginRight: "0.14in" }]}
        labelStyle={labelStyle}
      />
      <FieldInput
        label={"City/Municipality"}
        width="0.93in"
        style={[style, { marginRight: "0.10in" }]}
        labelStyle={labelStyle}
      />
      <FieldInput
        label={"Province"}
        width="1in"
        style={[style, { marginRight: "0.14in" }]}
        labelStyle={labelStyle}
      />
      <FieldInput
        label={"Zip code"}
        width="0.51in"
        style={[style]}
        labelStyle={labelStyle}
      />
    </Row>
  );
}

export default AddressInput;
