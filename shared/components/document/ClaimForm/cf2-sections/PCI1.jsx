import React from "react";
import Row from "../layout/Row";
import Column from "../layout/Column";
import Heading1 from "../../typography/Heading1";
import FieldInput from "../inputs/FieldInput";
import CheckBoxInput from "../inputs/CheckBoxInput";
import AddressInput from "../inputs/AddressInput";
import SegmentedTimeInput from "../inputs/SegmentedTimeInput";
import { StyleSheet, Text } from "@react-pdf/renderer";
import { styles } from "../forms/ClaimForm2";
import SegmentedDate from "../../../../../src/components/SegmentedDate";
import TimeInput from "../inputs/TimeInput";

const ComponentStyles = StyleSheet.create({
  textFields: {
    alignItems: "center",
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
          marginTop: 0,
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
        <Heading1>
          2. Was patient referred by another Health Care Institution (HCI)?
        </Heading1>
        <Row
          style={{
            marginLeft: "0.12in",
          }}
        >
          <CheckBoxInput
            isSmall
            label={"NO"}
            style={{
              marginRight: "0.11in",
            }}
          />
          <CheckBoxInput
            isSmall
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
          <AddressInput
            style={ComponentStyles.textFields}
            labelStyle={styles.bodyText}
          />
        </Row>
        <Row>
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
                label={"a. Date Admitted"}
                innerHeight={INPUT_CONSTANTS.innerHeight}
                outerHeight={INPUT_CONSTANTS.outerHeight}
                boxWidth={INPUT_CONSTANTS.width}
                style={{
                  marginRight: "0.23in",
                }}
              />
              <TimeInput
                label={"b. Time Admitted"}
                style={{
                  marginRight: "0.23in",
                }}
              />

              <CheckBoxInput
                label={"AM"}
                isSmall
                style={{
                  marginRight: "0.18in",
                }}
              />
              <CheckBoxInput
                label={"PM"}
                isSmall
                style={{
                  marginRight: "0.24in",
                }}
              />
            </Row>
            <Row style={[styles.alignItemsEnd]}>
              <SegmentedDate
                label={"c. Date Discharge"}
                innerHeight={INPUT_CONSTANTS.innerHeight}
                outerHeight={INPUT_CONSTANTS.outerHeight}
                boxWidth={INPUT_CONSTANTS.width}
                style={{
                  marginRight: "0.20in",
                }}
              />
              <TimeInput
                label={"d. Time Discharge"}
                style={{
                  marginRight: "0.23in",
                }}
              />
              <CheckBoxInput
                label={"AM"}
                isSmall
                style={{
                  marginRight: "0.18in",
                }}
              />
              <CheckBoxInput
                label={"PM"}
                isSmall
                style={{
                  marginRight: "0.24in",
                }}
              />
            </Row>
          </Column>
        </Row>
        <Row>
          <Heading1>4. Patient Disposition: </Heading1>
          <Text>(select only 1)</Text>
        </Row>
        <Column
          style={{
            marginLeft: "0.13in",
          }}
        >
          <Row style={[styles.alignItemsEnd]}>
            <CheckBoxInput
              label={"a. Improved"}
              boxMarginRight="0.22in"
              isSmall
              style={{
                marginRight: "1.28in",
              }}
            />
            <CheckBoxInput
              label={"e. Expired"}
              boxMarginRight="0.18in"
              isSmall
              style={{
                marginRight: "0.19in",
              }}
            />
            <SegmentedDate
              style={{
                marginRight: "0.20in",
              }}
              innerHeight={INPUT_CONSTANTS.innerHeight}
              outerHeight={INPUT_CONSTANTS.outerHeight}
              boxWidth={INPUT_CONSTANTS.width}
            />
            <TimeInput
              label={"Time: "}
              style={{
                marginRight: "0.24in",
              }}
            />
            <CheckBoxInput
              label={"AM"}
              isSmall
              style={{
                marginRight: "0.18in",
              }}
            />
            <CheckBoxInput
              label={"PM"}
              isSmall
              style={{
                marginRight: "0.24in",
              }}
            />
          </Row>
          <Row>
            <CheckBoxInput
              label={"b. Recovered"}
              boxMarginRight="0.22in"
              isSmall
              style={{
                marginRight: "1.24in",
              }}
            />
            <CheckBoxInput
              label={"f. Transferred/Referred"}
              isSmall
              boxMarginRight="0.22in"
              style={{
                marginRight: "0.08in",
              }}
            />
            <FieldInput
              width="4.0in"
              label="Name of Referral Health Care Institution
"
              style={[ComponentStyles.textFields]}
              labelStyle={styles.bodyText}
            />
          </Row>
          <Row>
            <CheckBoxInput
              label={"c. Home/Discharged Against Medical Advise"}
              isSmall
              boxMarginRight="0.22in"
              style={{
                marginRight: "0.90in",
              }}
            />
            <AddressInput
              style={ComponentStyles.textFields}
              labelStyle={styles.bodyText}
            />
          </Row>
          <Row>
            <CheckBoxInput
              label={"d. Absconded"}
              isSmall
              boxMarginRight="0.23in"
              style={{
                marginRight: "1.67in",
              }}
            />
            <Text style={[styles.bodyText, { marginRight: "0.18in" }]}>
              Reason/s for referral/transfer:
            </Text>
            <FieldInput width="3.63in" />
          </Row>
        </Column>
        <Row>
          <Heading1
            style={{
              marginRight: "0.20in",
            }}
          >
            5. Type of Accomodation:
          </Heading1>
          <CheckBoxInput
            label="Private"
            isSmall
            style={{
              marginRight: "0.18in",
            }}
            boxMarginRight="0.13in"
          />
          <CheckBoxInput
            isSmall
            label="Non-Private (Charity/Service)"
            boxMarginRight="0.13in"
          />
        </Row>
      </Column>
    </Row>
  );
};
