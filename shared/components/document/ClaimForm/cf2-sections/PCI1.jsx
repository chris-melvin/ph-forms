import React from "react";
import Row from "../layout/Row";
import Column from "../layout/Column";
import Heading1 from "../../typography/Heading1";
import FieldInput from "../inputs/FieldInput";
import AddressInput from "../inputs/AddressInput";
import SegmentedTimeInput from "../inputs/SegmentedTimeInput";
import { StyleSheet, Text } from "@react-pdf/renderer";
import { styles } from "../forms/ClaimForm2";
import SegmentedDate from "../../../../../src/components/SegmentedDate";
import TimeInput from "../inputs/TimeInput";
import CheckBoxInput from "../../inputs/CheckBoxInput";

const ComponentStyles = StyleSheet.create({
  textFields: {
    alignItems: "center",
  },
  rowStyles: {
    marginBottom: ".07in",
  },
});

// Patient Confinement Information 1 - 1 to 5
export const PCI1 = () => {
  const INPUT_CONSTANTS = {
    innerHeight: ".06in",
    outerHeight: ".06in",
    width: ".17in",
  };

  return (
    <Row
      style={{
        borderBottom: "1.5 #000 solid",
      }}
    >
      <Column
        style={{
          margin: "0.07in",
          marginLeft: "0",
          padding: "0.05in",
          marginBottom: 0,
          paddingBottom: 0,
        }}
      >
        <Row>
          <Heading1
            style={{
              marginRight: "0.28in",
            }}
          >
            1. Name of Patient:
          </Heading1>
          <Row>
            <FieldInput
              label={"Last Name"}
              style={[ComponentStyles.textFields, { marginRight: "0.16in" }]}
              labelStyle={styles.bodyText}
              width="1.50in"
            />
            <FieldInput
              label={"First Name"}
              style={[ComponentStyles.textFields, { marginRight: "0.12in" }]}
              labelStyle={styles.bodyText}
              width="1.66in"
            />
            <FieldInput
              label={"Name Extension"}
              style={[ComponentStyles.textFields, { marginRight: "0.16in" }]}
              labelStyle={styles.bodyText}
              width="1.12in"
              description={"(JR/SR/III)"}
              descriptionStyle={styles.bodyText}
            />
            <FieldInput
              label={"Middle Name"}
              style={[ComponentStyles.textFields]}
              labelStyle={styles.bodyText}
              width="1.59in"
              description={"(ex: DELA CRUZ JUAN JR SIPAG)"}
              descriptionStyle={styles.bodyText}
            />
          </Row>
        </Row>
        <Heading1 style={[ComponentStyles.rowStyles]}>
          2. Was patient referred by another Health Care Institution (HCI)?
        </Heading1>
        <Row
          style={[
            ComponentStyles.rowStyles,
            {
              marginLeft: "0.12in",
            },
          ]}
        >
          <CheckBoxInput
            customHeight=".17in"
            customWidth=".17in"
            labelStyle={[styles.bodyText, styles.checkBoxLabel]}
            label={"NO"}
            style={{
              marginRight: "0.11in",
            }}
          />
          <CheckBoxInput
            customHeight=".17in"
            customWidth=".17in"
            labelStyle={[styles.bodyText, styles.checkBoxLabel]}
            label={"YES"}
            style={{
              marginRight: "0.11in",
            }}
          />
          <FieldInput
            label={"Name of referring Health Care Institution"}
            width="2.06in"
            style={[ComponentStyles.textFields, { marginRight: "0.18in" }]}
            labelStyle={styles.bodyText}
          />
          <Row style={{ marginRight: ".1in" }}>
            <AddressInput
              style={ComponentStyles.textFields}
              labelStyle={[styles.bodyText]}
            />
          </Row>
        </Row>
        <Row style={[]}>
          <Heading1
            style={{
              marginRight: "0.23in",
            }}
          >
            3. Confinement Period:
          </Heading1>
          <Column>
            <Row style={[styles.alignItemsEnd]}>
              <SegmentedDate
                fieldLabelStyle={[styles.bodyText, { fontSize: "7px" }]}
                label={"a. Date Admitted"}
                leftLabelStyle={[styles.bodyText, { marginRight: "0.02in" }]}
                innerHeight={INPUT_CONSTANTS.innerHeight}
                outerHeight={INPUT_CONSTANTS.outerHeight}
                dateLabel={["month", "day", "year"]}
                boxWidth={INPUT_CONSTANTS.width}
                dateFieldContainerStyle={{ marginTop: ".07in" }}
                dashMarginTop={".05in"}
                style={[
                  {
                    paddingTop: 0,
                    marginRight: "0.20in",
                  },
                ]}
              />
              <TimeInput
                fieldLabelStyle={[styles.bodyText, { fontSize: "7px" }]}
                label={"b. Time Admitted"}
                leftLabelStyle={[styles.bodyText, { marginRight: ".03in" }]}
                timeFieldContainerStyle={{ marginTop: ".07in" }}
                style={{
                  paddingTop: 0,
                  marginRight: "0.23in",
                }}
              />

              <CheckBoxInput
                customHeight=".17in"
                customWidth=".17in"
                labelStyle={[
                  styles.bodyText,
                  styles.checkBoxLabel,
                  { marginLeft: ".06in", paddingTop: 1 },
                ]}
                label={"AM"}
                style={{
                  marginRight: "0.18in",
                }}
              />
              <CheckBoxInput
                customHeight=".17in"
                customWidth=".17in"
                labelStyle={[
                  styles.bodyText,
                  styles.checkBoxLabel,
                  { marginLeft: ".06in", paddingTop: 1 },
                ]}
                label={"PM"}
                style={{
                  marginRight: "0.24in",
                }}
              />
            </Row>
            <Row style={[styles.alignItemsEnd]}>
              <SegmentedDate
                fieldLabelStyle={[styles.bodyText, { fontSize: "7px" }]}
                label={"c. Date Discharge"}
                leftLabelStyle={styles.bodyText}
                innerHeight={INPUT_CONSTANTS.innerHeight}
                outerHeight={INPUT_CONSTANTS.outerHeight}
                boxWidth={INPUT_CONSTANTS.width}
                dateLabel={["month", "day", "year"]}
                dateFieldContainerStyle={{ marginTop: ".07in" }}
                dashMarginTop={".05in"}
                style={{
                  paddingTop: 0,
                  marginRight: "0.20in",
                }}
              />
              <TimeInput
                fieldLabelStyle={[styles.bodyText, { fontSize: "7px" }]}
                label={"d. Time Discharge"}
                leftLabelStyle={[styles.bodyText, { marginRight: ".01in" }]}
                timeFieldContainerStyle={{ marginTop: ".07in" }}
                style={{
                  paddingTop: 0,
                  marginRight: "0.22in",
                }}
              />
              <CheckBoxInput
                customHeight=".17in"
                customWidth=".17in"
                labelStyle={[
                  styles.bodyText,
                  styles.checkBoxLabel,
                  { marginLeft: ".06in", paddingTop: 1 },
                ]}
                label={"AM"}
                style={{
                  marginRight: "0.18in",
                }}
              />
              <CheckBoxInput
                customHeight=".17in"
                customWidth=".17in"
                labelStyle={[
                  styles.bodyText,
                  styles.checkBoxLabel,
                  { marginLeft: ".06in", paddingTop: 1 },
                ]}
                label={"PM"}
                style={{
                  marginRight: "0.24in",
                }}
              />
            </Row>
          </Column>
        </Row>
        <Row style={[ComponentStyles.rowStyles, { alignItems: "flex-end" }]}>
          <Heading1>4. Patient Disposition: </Heading1>
          <Text style={[styles.bodyText]}>(select only 1)</Text>
        </Row>
        <Row style={{ position: "relative" }}>
          <Column style={{ marginLeft: ".13in" }}>
            <CheckBoxInput
              label={"a. Improved"}
              customHeight=".17in"
              customWidth=".17in"
              labelStyle={[
                styles.bodyText,
                styles.checkBoxLabel,
                { marginLeft: ".22in" },
              ]}
              style={{
                marginRight: "1.28in",
              }}
            />
            <CheckBoxInput
              customHeight=".17in"
              customWidth=".17in"
              labelStyle={[
                styles.bodyText,
                styles.checkBoxLabel,
                { marginLeft: ".22in" },
              ]}
              label={"b. Recovered"}
              style={{
                marginRight: "1.20in",
              }}
            />
            <CheckBoxInput
              label={"c. Home/Discharged Against Medical Advise"}
              customHeight=".17in"
              customWidth=".17in"
              labelStyle={[
                styles.bodyText,
                styles.checkBoxLabel,
                { marginLeft: ".22in" },
              ]}
              style={{
                marginRight: "0.90in",
              }}
            />
            <CheckBoxInput
              label={"d. Absconded"}
              customHeight=".17in"
              customWidth=".17in"
              labelStyle={[
                styles.bodyText,
                styles.checkBoxLabel,
                { marginLeft: ".22in" },
              ]}
              style={{
                marginRight: "1.67in",
              }}
            />
          </Column>
          <Column
            style={{
              left: "-.45in",

              marginLeft: "0.13in",
            }}
          >
            <Row style={[styles.alignItemsEnd, { width: "5.51in" }]}>
              <CheckBoxInput
                label={"e. Expired"}
                customHeight=".17in"
                customWidth=".17in"
                labelStyle={[styles.bodyText, styles.checkBoxLabel]}
                style={{
                  marginRight: "0.19in",
                }}
              />
              <SegmentedDate
                fieldLabelStyle={[styles.bodyText, { fontSize: "7px" }]}
                leftLabelStyle={styles.bodyText}
                innerHeight={INPUT_CONSTANTS.innerHeight}
                outerHeight={INPUT_CONSTANTS.outerHeight}
                boxWidth={INPUT_CONSTANTS.width}
                dateLabel={["month", "day", "year"]}
                dateFieldContainerStyle={{ marginTop: ".07in" }}
                dashMarginTop={".05in"}
                style={{
                  paddingTop: 0,
                  marginRight: "0.20in",
                }}
              />
              <TimeInput
                label={"Time: "}
                leftLabelStyle={[styles.bodyText]}
                fieldLabelStyle={[styles.bodyText, { fontSize: "7px" }]}
                timeFieldContainerStyle={{ marginTop: ".07in" }}
                style={{
                  paddingTop: 0,
                  marginRight: "0.24in",
                }}
              />
              <CheckBoxInput
                customHeight=".17in"
                customWidth=".17in"
                labelStyle={[
                  styles.bodyText,
                  styles.checkBoxLabel,
                  { marginLeft: ".06in", paddingTop: 1 },
                ]}
                label={"AM"}
                style={{
                  marginRight: "0.1in",
                }}
              />
              <CheckBoxInput
                customHeight=".17in"
                customWidth=".17in"
                labelStyle={[
                  styles.bodyText,
                  styles.checkBoxLabel,
                  { marginLeft: ".06in", paddingTop: 1 },
                ]}
                label={"PM"}
                style={{
                  marginRight: "0.24in",
                }}
              />
            </Row>
            <Row style={[{ width: "5.51in" }]}>
              <CheckBoxInput
                label={"f. Transferred/Referred"}
                customHeight=".17in"
                customWidth=".17in"
                labelStyle={[styles.bodyText, styles.checkBoxLabel]}
                style={{
                  marginRight: "0.08in",
                }}
              />
              <FieldInput
                width="4.0in"
                label="Name of Referral Health Care Institution"
                style={[ComponentStyles.textFields]}
                labelStyle={[styles.bodyText, { fontSize: 7 }]}
              />
            </Row>
            <Row style={[{ width: "5.51in", marginLeft: "1in" }]}>
              <AddressInput
                style={ComponentStyles.textFields}
                labelStyle={[styles.bodyText, { fontSize: "7px" }]}
              />
            </Row>
            <Row style={[{ width: "5.51in", marginLeft: ".5in" }]}>
              <Text style={[styles.bodyText, { marginRight: "0.08in" }]}>
                Reason/s for referral/transfer:
              </Text>
              <FieldInput width="3.63in" />
            </Row>
          </Column>
        </Row>
        <Row>
          <Heading1
            style={{
              marginRight: "0.16in",
            }}
          >
            5. Type of Accomodation:
          </Heading1>
          <CheckBoxInput
            label="Private"
            customHeight=".17in"
            customWidth=".17in"
            labelStyle={[styles.bodyText, styles.checkBoxLabel]}
            style={{
              marginRight: "0.15in",
            }}
          />
          <CheckBoxInput
            customHeight=".17in"
            customWidth=".17in"
            labelStyle={[styles.bodyText, styles.checkBoxLabel]}
            label="Non-Private (Charity/Service)"
          />
        </Row>
      </Column>
    </Row>
  );
};
