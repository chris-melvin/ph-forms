import React from "react";
import Row from "../layout/Row";
import Column from "../layout/Column";
import Heading1 from "../../typography/Heading1";
import { StyleSheet, Text } from "@react-pdf/renderer";
import FieldInput from "../inputs/FieldInput";
import SegmentedDateInput from "../inputs/SegmentedDateInput";
import SegmentedDate from "../../../../../src/components/SegmentedDate";
import SegmentedLineInput from "../../../../../src/components/SegmentedLineInput";
import Dash from "../../../../../src/components/Dash";
import CheckBoxInput from "../../inputs/CheckBoxInput";

export const AccreditationNumber = () => {
  const styles = StyleSheet.create({
    rowStyle: {
      borderTopWidth: 1,
      width: "100%",
    },
    columnContainer: {
      alignItems: "center",
      borderRightWidth: 1,
      borderBottomWidth: 1,
      height: ".93in",
    },
  });
  return (
    <Row style={{ fontSize: "8.76px" }}>
      <Column style={{ width: "100%" }}>
        <Heading1>
          10.Accreditation Number/Name of Accredited Health Care
          Professional/Date Signed and Professional Fees/Charges
        </Heading1>
        <Text>(Use additional CF2 if necessary):</Text>
        <Row style={styles.rowStyle}>
          <Column style={{ width: "50%" }}>
            <Row style={{ borderBottomWidth: 1, borderRightWidth: 1 }}>
              <Text style={{ fontSize: "8px" }}>
                Accreditation number/Name of Accredited Health Care
                Professional/Date Signed
              </Text>
            </Row>
            {Array.from({ length: 3 }, (_, i) => (
              <Column style={styles.columnContainer}>
                <Row style={{ alignItems: "flex-end" }}>
                  <Text style={{ marginRight: ".1in" }}>
                    Accreditation No.:
                  </Text>
                  <SegmentedLineInput
                    outerHeight=".08in"
                    number={4}
                    style={{ marginRight: ".04in" }}
                  />
                  <Dash height=".08in" />
                  <SegmentedLineInput
                    outerHeight=".08in"
                    number={7}
                    style={{ marginRight: ".04in", marginLeft: ".04in" }}
                  />
                  <Dash height=".08in" />
                  <SegmentedLineInput
                    outerHeight=".08in"
                    number={1}
                    style={{ marginLeft: ".04in" }}
                  />
                </Row>
                <FieldInput
                  label={"Signature Over Printed Name"}
                  width="2.06in"
                  style={{
                    marginRight: "0.18in",
                  }}
                />
                <SegmentedDate
                  label="Date Signed:"
                  style={{ paddinTop: 0 }}
                  outerHeight=".08in"
                />
              </Column>
            ))}
          </Column>
          <Column style={{ width: "50%" }}>
            <Row style={{ borderBottomWidth: 1, borderRightWidth: 1 }}>
              <Text style={{ textAlign: "center" }}>Details</Text>
            </Row>
            {Array.from({ length: 3 }, (_, i) => (
              <Column
                style={[styles.columnContainer, { justifyContent: "center" }]}
              >
                <CheckBoxInput label="No co-pay on top of PhilHealth Benefit" />
                <Row>
                  <CheckBoxInput label="With co-pay on top of PhilHealth Benefit" />{" "}
                  <Text>P</Text> <FieldInput width="1in" />
                </Row>
              </Column>
            ))}
          </Column>
        </Row>
      </Column>
    </Row>
  );
};
