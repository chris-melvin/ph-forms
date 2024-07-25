import React from "react";
import Column from "../layout/Column";
import CheckBoxInput from "../../inputs/CheckBoxInput";
import Row from "../layout/Row";
import { StyleSheet, Text, View } from "@react-pdf/renderer";
import Heading1 from "../../typography/Heading1";
import FieldInput from "../inputs/FieldInput";
import SegmentedDate from "../../../../../src/components/SegmentedDate";

export const Part3B = () => {
  const styles = StyleSheet.create({
    rowStyle: {
      borderTopWidth: 1,
      width: "100%",
    },
    columnContainer: {},
  });
  return (
    <Column style={styles.columnContainer}>
      <Row>
        <Heading1>B.CONSENT TO ACCESS PATIENT RECORD/S:</Heading1>
      </Row>
      <Row>
        <Text>
          I hereby consent to the submission and examination of the patient’s
          pertinent medical records for the purpose of verifying the veracity of
          this claim to effect efficient processing of benefit payment
        </Text>
      </Row>
      <Row>
        <Text>
          I hereby hold PhilHealth or any of its officers, employees and/or
          representatives free from any and all legal liabilities relative to
          the herein-mentioned consent which I have voluntarily and willingly
          given in connection with this claim for reimbursement before
          PhilHealth
        </Text>
      </Row>
      <Row style={{ marginTop: ".2in" }}>
        <Column style={{ width: "4.42in" }}>
          <FieldInput
            label={
              "Signature Over Printed Name of Member/Patient/Authorized Representative"
            }
            width="3.31in"
            style={{
              marginRight: "0.18in",
            }}
          />

          <SegmentedDate
            label="Date Signed:"
            style={{ paddinTop: 0 }}
            outerHeight=".08in"
          />
          <Row>
            <View>
              <Text>Relationship of the representative to</Text>
              <Text>the member/patient:</Text>
            </View>
            <View>
              <Row>
                <CheckBoxInput label="Spouse" />
                <CheckBoxInput label="Child" /> <CheckBoxInput label="Parent" />
              </Row>
              <Row>
                <CheckBoxInput label="Sibling" />
                <CheckBoxInput label="Others, specify" />
              </Row>
            </View>
          </Row>
          <Row>
            <View>
              <Text>Reason for signing on behalf of the</Text>
              <Text>member/patient:</Text>
            </View>
            <View>
              <Row>
                <CheckBoxInput
                  label="Patient is Incapacitated
"
                />
              </Row>
              <Row>
                <CheckBoxInput label="Others Reasons" />
              </Row>
            </View>
          </Row>
        </Column>
        <Column>
          <Text style={{ maxWidth: "1in" }}>
            If patient/representative is unable to write, put right thumbmark.
            Patient/ Representative should be assisted by an HCI representative
          </Text>
          <CheckBoxInput label="Patient" />
          <CheckBoxInput label="Representative" />
        </Column>
        <Column>
          <View
            style={{ width: "1.16in", height: "1.36in", borderWidth: 1 }}
          ></View>
        </Column>
      </Row>
    </Column>
  );
};
