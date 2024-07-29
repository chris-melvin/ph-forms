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
import { styles } from "../forms/ClaimForm2";

export const AccreditationNumber = () => {
  const ComponentStyles = StyleSheet.create({
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
    textFields: {
      alignItems: "center",
    },
    tableHeader: {
      borderBottomWidth: 1,
      borderRightWidth: 1,
      justifyContent: "center",
    },
  });
  return (
    <Row style={{ fontSize: "8.76px" }}>
      <Column style={{ width: "100%" }}>
        <Heading1>
          10.Accreditation Number/Name of Accredited Health Care
          Professional/Date Signed and Professional Fees/Charges
        </Heading1>
        <Text
          style={[
            styles.bodyText,
            { marginLeft: ".1in", marginBottom: ".07in" },
          ]}
        >
          (Use additional CF2 if necessary):
        </Text>
        <Row style={[ComponentStyles.rowStyle, styles.bodyText]}>
          <Column style={{ width: "4.2in" }}>
            <Row style={ComponentStyles.tableHeader}>
              <Text style={{ fontSize: "8px" }}>
                Accreditation number/Name of Accredited Health Care
                Professional/Date Signed
              </Text>
            </Row>
            {Array.from({ length: 3 }, (_, i) => (
              <Column style={ComponentStyles.columnContainer}>
                <Row
                  style={{
                    alignItems: "flex-end",
                    marginTop: ".04in",
                    transform: "translate(-18, 0)",
                  }}
                >
                  <Text
                    style={{
                      marginRight: ".1in",
                    }}
                  >
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
                  style={[
                    ComponentStyles.textFields,
                    {
                      marginTop: "0.15in",
                    },
                  ]}
                  width="3.25in"
                />
                <SegmentedDate
                  fieldLabelStyle={[styles.bodyText, { fontSize: "7px" }]}
                  label="Date Signed:"
                  leftLabelStyle={{ fontFamily: "Source Sans" }}
                  style={{ paddingTop: 0, marginTop: ".1in" }}
                  outerHeight=".08in"
                  dateLabel={["month", "day", "year"]}
                />
              </Column>
            ))}
          </Column>
          <Column style={{ width: "3.8in" }}>
            <Row style={ComponentStyles.tableHeader}>
              <Text style={{ textAlign: "center" }}>Details</Text>
            </Row>
            {Array.from({ length: 3 }, (_, i) => (
              <Column
                style={[
                  ComponentStyles.columnContainer,
                  {
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: ".1in",
                  },
                ]}
              >
                <CheckBoxInput
                  customHeight=".17in"
                  customWidth=".17in"
                  labelStyle={[styles.bodyText, styles.checkBoxLabel]}
                  label="No co-pay on top of PhilHealth Benefit"
                />
                <Row style={{ alignItems: "center" }}>
                  <CheckBoxInput
                    customHeight=".17in"
                    customWidth=".17in"
                    labelStyle={[styles.bodyText, styles.checkBoxLabel]}
                    label="With co-pay on top of PhilHealth Benefit"
                    style={{ marginRight: ".1in" }}
                  />
                  <Text style={{ marginRight: ".07in" }}>P</Text>{" "}
                  <FieldInput width="1in" />
                </Row>
              </Column>
            ))}
          </Column>
        </Row>
      </Column>
    </Row>
  );
};
