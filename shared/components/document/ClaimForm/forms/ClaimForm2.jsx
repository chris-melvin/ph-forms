import { Document, Page, StyleSheet, Text } from "@react-pdf/renderer";
import React from "react";

import FieldInput from "../inputs/FieldInput";
import Column from "../layout/Column";
import Row from "../layout/Row";

import SectionDivider from "../../typography/SectionDivider";
import { registerMinionPro, registerSourceSans } from "../../fonts";

import { Header } from "../cf2-sections/Header";
import { HCIinfo } from "../cf2-sections/HCIinfo";
import { PCI1 } from "../cf2-sections/PCI1";
import { PCI2 } from "../cf2-sections/PCI2";
import { PCI3 } from "../cf2-sections/PCI3";
import { AccreditationNumber } from "../cf2-sections/AccreditationNumber";
import { Part3A } from "../cf2-sections/Part3A";
import { Part3B } from "../cf2-sections/Part3B";
import SegmentedDate from "../../../../../src/components/SegmentedDate";

const DEFAULT_LETTER_SPACING = -0.35;

registerSourceSans();
registerMinionPro();

export const styles = StyleSheet.create({
  page: {
    maxWidth: "100%",
    // padding: "0.25in",
    paddingLeft: "0.25in",
    paddingRight: ".22in",
    paddingTop: ".25in",
    paddingBottom: ".25in",
  },

  body: {
    borderWidth: 2,
    borderColor: "#000",
    borderStyle: "solid",
    height: "100%",
    maxHeight: "100%",
    fontFamily: "Source Sans",
    fontSize: 8.64,
  },

  top_header: {
    borderBottom: "1.5 #000 solid",
    paddingBottom: "0.20in",
  },
  header_logo: {
    width: "1.40in",
    height: "0.56in",
    marginRight: "0.42in",
    marginTop: "0.42in",
    marginLeft: "0.28in",
  },
  header_right: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Source Sans",
  },
  bottom_header: {
    marginTop: "0.05in",
    marginLeft: "0.07in",
    marginBottom: ".025in",
    letterSpacing: DEFAULT_LETTER_SPACING,
    fontFamily: "Source Sans",
    fontWeight: "light",
    fontSize: "8px",
  },
  part_one_section: {
    margin: "0.07in",
    marginTop: 0,
    letterSpacing: DEFAULT_LETTER_SPACING,
  },
  bodyText: {
    fontSize: 8,
    fontFamily: "Source Sans",
    fontWeight: "extralight",
  },
  alignItemsEnd: {
    alignItems: "flex-end",
  },
  checkBoxLabel: {
    marginLeft: ".13in",
    paddingTop: 2,
  },
});

function CF2() {
  return (
    <Document>
      <Page
        size={{
          width: 612,
          height: 936,
        }}
        style={styles.page}
      >
        <Column style={styles.body}>
          {/* Header Start */}
          <Header />
          {/* Header End */}

          <SectionDivider
            text={"PART I - HEALTH CARE INSTITUTION (HCI) INFORMATION"}
          />
          {/* Start of HCIinfo */}
          <HCIinfo />
          {/* End of HCIinfo */}

          <SectionDivider text={"PART II - PATIENT CONFINEMENT INFORMATION"} />
          <Column>
            {/* PCI number 1 to 5 */}
            <PCI1 />

            {/* PCI number 6 to 7 */}
            <PCI2 />

            {/* PCI number 8 to 9 */}
            <PCI3 />
          </Column>
        </Column>
      </Page>
      <Page
        size={{
          width: 612,
          height: 936,
        }}
        style={styles.page}
      >
        <Column style={styles.body}>
          {/* PCI number 10 */}
          <AccreditationNumber />
          <SectionDivider
            flexDirection="column"
            text="PART III - CERTIFICATION OF CONSUMPTION OF BENEFITS AND CONSENT TO ACCESS PATIENT RECORD/S"
            description="NOTE: Member/Patient should sign only after the applicable charges have been filled-out
"
          />
          {/* A.CERTIFICATION OF CONSUMPTION OF BENEFITS:
           */}
          <Part3A />
          {/* B.CONSENT TO ACCESS PATIENT RECORD/S:
           */}
          <Part3B />

          <SectionDivider
            flexDirection="column"
            text="PART IV - CERTIFICATION OF CONSUMPTION OF HEALTH CARE INSTITUTION"
          />
          <Text
            style={[
              styles.bodyText,
              { fontStyle: "italic", marginLeft: ".25in", marginTop: ".1in" },
            ]}
          >
            I certify that services rendered were recorded in the patient's
            chart and health care institution records and that the herein
            information given are true and correct.
          </Text>
          <Row>
            <FieldInput
              label={
                "Signature Over Printed Name of Authorized HCI Representative"
              }
              labelStyle={[styles.bodyText]}
              width="2.83in"
              style={{
                marginRight: "0.18in",
                alignItems: "center",
                marginLeft: ".2in",
                paddingTop: 5,
              }}
            />
            <FieldInput
              label={"Official Capacity/Designation"}
              width="2.06in"
              labelStyle={[styles.bodyText]}
              style={{
                marginRight: "0.18in",
                alignItems: "center",
                paddingTop: 5,
              }}
            />

            <SegmentedDate
              fieldLabelStyle={[styles.bodyText, { fontSize: "7px" }]}
              label="Date Signed:"
              leftLabelStyle={[styles.bodyText]}
              style={{
                paddingTop: 0,
                marginTop: ".1in",
                marginLeft: ".2in",
                marginRight: ".2in",
              }}
              outerHeight=".08in"
              dateLabel={["month", "day", "year"]}
              dateFieldContainerStyle={{ marginTop: ".07in" }}
              dashMarginTop={".05in"}
            />
          </Row>
        </Column>
      </Page>
    </Document>
  );
}

export default CF2;
