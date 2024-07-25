import React from "react";
import Column from "../layout/Column";
import Row from "../layout/Row";
import Heading1 from "../../typography/Heading1";
import SegmentedLineInput from "../inputs/SegmentedLineInput";
import FieldInput from "../inputs/FieldInput";
import { styles } from "../forms/ClaimForm2";

export const HCIinfo = () => {
  return (
    <Column style={styles.part_one_section}>
      <Row>
        <Heading1
          style={{
            marginRight: "0.20in",
          }}
        >
          1. PhilHealth Accreditation Number (PAN) of Health Care Institution:
        </Heading1>
        <SegmentedLineInput number={9} />
      </Row>
      <Row>
        <Heading1
          style={{
            marginRight: "0.04in",
          }}
        >
          2. Name of Health Care Institution:
        </Heading1>
        <FieldInput width="5.60in" />
      </Row>
      <Row
        style={
          {
            // marginBottom: '0.11in',
          }
        }
      >
        <Heading1
          style={{
            marginRight: "0.19in",
          }}
        >
          3. Address:
        </Heading1>
        <FieldInput
          style={{
            marginRight: "0.15in",
          }}
          width="2.86in"
          label="Building Number and Street Name"
        />
        <FieldInput
          style={{
            marginRight: "0.15in",
          }}
          width="2in"
          label="City/Municipality"
        />
        <FieldInput width="1.73in" label="Province" />
      </Row>
    </Column>
  );
};
