import React from "react";
import Column from "../layout/Column";
import CheckBoxInput from "../../inputs/CheckBoxInput";
import Row from "../layout/Row";
import { StyleSheet, Text, View } from "@react-pdf/renderer";
import Heading1 from "../../typography/Heading1";
import FieldInput from "../inputs/FieldInput";
import SegmentedDate from "../../../../../src/components/SegmentedDate";
import { styles } from "../forms/ClaimForm2";

export const Part3B = () => {
  const ComponentStyles = StyleSheet.create({
    rowStyle: {
      borderTopWidth: 1,
      width: "100%",
    },
    columnContainer: {},
    consentText: {
      fontSize: "8px",
      fontStyle: "italic",
      fontWeight: "bold",
    },
    consentTextContainer: {
      marginLeft: ".20in",
    },
  });

  const CHECKBOX_CONFIG = {
    customHeight: ".13in",
    customWidth: ".13in",
    marginBottom: 0,
    labelStyle: [
      styles.bodyText,
      { marginLeft: ".05in", fontWeight: "extralight", fontSize: "8px" },
    ],
  };
  return (
    <Column style={ComponentStyles.columnContainer}>
      <Row style={[{ marginLeft: ".07in" }]}>
        <Heading1>B.CONSENT TO ACCESS PATIENT RECORD/S:</Heading1>
      </Row>
      <Column
        style={[ComponentStyles.consentTextContainer, { marginTop: ".1in" }]}
      >
        <Text style={[ComponentStyles.consentText]}>
          I hereby consent to the submission and examination of the patient's
          pertinent medical records for the purpose of verifying the veracity of
          this claim to effect{" "}
        </Text>
        <Text style={[ComponentStyles.consentText]}>
          efficient processing of benefit payment.
        </Text>
      </Column>
      <Column style={[ComponentStyles.consentTextContainer]}>
        <Text style={ComponentStyles.consentText}>
          I hereby hold PhilHealth or any of its officers, employees and/or
          representatives free from any and all legal liabilities relative to
          the herein-mentioned consent
        </Text>
        <Text style={ComponentStyles.consentText}>
          which I have voluntarily and willingly given in connection with this
          claim for reimbursement before PhilHealth
        </Text>
      </Column>
      <Row style={{ marginTop: ".2in", marginLeft: ".2in" }}>
        <Column style={{ width: "4.42in" }}>
          <FieldInput
            labelStyle={[styles.bodyText, { fontSize: "8px" }]}
            label={
              "Signature Over Printed Name of Member/Patient/Authorized Representative"
            }
            width="3.31in"
            style={{
              marginRight: "0.18in",
            }}
          />

          <SegmentedDate
            fieldLabelStyle={[styles.bodyText, { fontSize: "7px" }]}
            label="Date Signed:"
            leftLabelStyle={[styles.bodyText]}
            style={{ paddingTop: 0, marginTop: ".1in", marginLeft: ".5in" }}
            outerHeight=".08in"
            dateLabel={["month", "day", "year"]}
          />

          <Row style={{ marginTop: ".1in" }}>
            <Column>
              <Column
                style={[
                  styles.bodyText,
                  {
                    marginBottom: "0.12in",
                    marginRight: "0.11in",
                  },
                ]}
              >
                <Text>Relationship of the</Text>
                <Text>representative to the member/patient</Text>
              </Column>
              <Column
                style={[
                  styles.bodyText,
                  {
                    marginBottom: "0.12in",
                    marginRight: "0.11in",
                  },
                ]}
              >
                <Text>Reason for signing on</Text>
                <Text>behalf of the member/patient</Text>
              </Column>
            </Column>
            <Column>
              <Column>
                <Row>
                  <CheckBoxInput
                    {...CHECKBOX_CONFIG}
                    style={{
                      marginRight: "0.09in",
                    }}
                    label={"Spouse"}
                  />
                  <CheckBoxInput
                    style={{
                      marginRight: "0.09in",
                    }}
                    {...CHECKBOX_CONFIG}
                    label={"Child"}
                  />
                  <CheckBoxInput {...CHECKBOX_CONFIG} label={"Parent"} />
                </Row>
                <Row style={{ marginBottom: ".04in" }}>
                  <CheckBoxInput
                    label={"Sibling"}
                    {...CHECKBOX_CONFIG}
                    style={{
                      marginTop: "0.02in",
                      marginRight: "0.11in",
                    }}
                  />
                  <CheckBoxInput
                    label={"Others, Specify "}
                    {...CHECKBOX_CONFIG}
                    style={{
                      marginTop: "0.02in",
                    }}
                  />
                  <FieldInput width="1.04in" />
                </Row>
              </Column>
              <Column>
                <Row>
                  <CheckBoxInput
                    {...CHECKBOX_CONFIG}
                    style={{
                      marginTop: "0.02in",
                    }}
                    label={`Patient is incapacitated`}
                  />
                </Row>
                <Row>
                  <CheckBoxInput
                    {...CHECKBOX_CONFIG}
                    label={"Other reasons: "}
                    style={{
                      marginTop: "0.02in",
                    }}
                  />
                  <FieldInput width={121} />
                </Row>
              </Column>
            </Column>
          </Row>
        </Column>
        <Column
          style={[{ width: "1.55in", marginLeft: ".1in" }, styles.bodyText]}
        >
          <Text>If patient/representative</Text>
          <Text>is unable to write, put</Text>
          <Text>right thumbmark. Patient/</Text>
          <Text>Representative should be</Text>
          <Text>assisted by an HCI representative.</Text>

          <CheckBoxInput
            {...CHECKBOX_CONFIG}
            label="Patient"
            style={{ marginBottom: ".02in", marginTop: ".25in" }}
          />
          <CheckBoxInput {...CHECKBOX_CONFIG} label="Representative" />
        </Column>
        <Column>
          <View
            style={{ width: "1.16in", height: "1.36in", borderWidth: 2 }}
          ></View>
        </Column>
      </Row>
    </Column>
  );
};
