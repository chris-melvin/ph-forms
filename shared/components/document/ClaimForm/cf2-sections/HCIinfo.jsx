import React from "react";
import Column from "../layout/Column";
import Row from "../layout/Row";
import Heading1 from "../../typography/Heading1";
import FieldInput from "../inputs/FieldInput";
import { styles } from "../forms/ClaimForm2";
import SegmentedLineInput from "../../../../../src/components/SegmentedLineInput";
import { StyleSheet } from "@react-pdf/renderer";

const ComponentStyles = StyleSheet.create({
  fields: {
    marginBottom: ".05in",
  },
});

export const HCIinfo = () => {
  return (
    <Column style={styles.part_one_section}>
      <Row
        style={[
          ComponentStyles.fields,
          { marginTop: ".05in", alignItems: "flex-end" },
        ]}
      >
        <Heading1
          style={{
            marginRight: "0.20in",
          }}
        >
          1. PhilHealth Accreditation Number (PAN) of Health Care Institution:
        </Heading1>
        <SegmentedLineInput number={9} outerHeight=".08in" width=".155in" />
      </Row>
      <Row style={[ComponentStyles.fields]}>
        <Heading1
          style={{
            marginRight: "0.04in",
          }}
        >
          2. Name of Health Care Institution:
        </Heading1>
        <FieldInput width="5.60in" />
      </Row>
      <Row style={[ComponentStyles.fields]}>
        <Heading1
          style={{
            marginRight: "0.22in",
          }}
        >
          3. Address:
        </Heading1>
        <FieldInput
          style={{
            marginRight: "0.15in",
            alignItems: "center",
          }}
          width="2.86in"
          label="Building Number and Street Name"
          labelStyle={{ fontWeight: "light" }}
        />
        <FieldInput
          style={{
            marginRight: "0.15in",
            alignItems: "center",
          }}
          width="2in"
          label="City/Municipality"
          labelStyle={{ fontWeight: "light", fontSize: 8 }}
        />
        <FieldInput
          style={{
            marginRight: "0.15in",
            alignItems: "center",
          }}
          width="1.89in"
          label="Province"
          labelStyle={{ fontWeight: "light" }}
        />
      </Row>
    </Column>
  );
};
