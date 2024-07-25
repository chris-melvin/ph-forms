import React from "react";
import Column from "../layout/Column";
import CheckBoxInput from "../../inputs/CheckBoxInput";
import Row from "../layout/Row";
import { StyleSheet, Text, View } from "@react-pdf/renderer";
import Heading1 from "../../typography/Heading1";
import FieldInput from "../inputs/FieldInput";

const styles = StyleSheet.create({
  rowStyle: {
    borderTopWidth: 1,
    width: "100%",
  },
  columnContainer: {},
  tableColumn: {
    borderRightWidth: 1,
  },
  tableContainer: {
    width: "7in",
    borderWidth: 1,
    marginHorizontal: "auto",
  },

  cell: {
    borderRightWidth: 1,
  },
  row1: {
    height: ".57in",
  },
  row2: {
    height: ".67in",
  },
  row3: {
    height: ".66in",
  },

  col1: {
    width: "1.07in",
  },
  col2: {
    width: "1.44in",
  },
  col3: {
    width: "1.49in",
  },
  col4: {
    width: "1.39in",
  },
  col5: {
    width: "1.95in",
  },
});

export const Part3A = () => {
  return (
    <Column style={styles.columnContainer}>
      <Row>
        <Heading1>A.CERTIFICATION OF CONSUMPTION OF BENEFITS:</Heading1>
      </Row>
      <Row>
        <CheckBoxInput isSmall={false} customHeight=".2in" customWidth=".2in" />
        <View>
          <Text>PhilHealth benefit is enough to cover HCI and PF Charges.</Text>
          <Text>
            No purchase of drugs/medicines, supplies, diagnostics, and co-pay
            for professional fees by the member/patient.
          </Text>
        </View>
      </Row>

      <Row style={[styles.tableContainer]}>
        <Column style={[styles.tableColumn, { width: "50%" }]}>
          <Text></Text>
        </Column>
        <Column style={[styles.tableColumn, { width: "50%" }]}>
          <Text>Total Actual Charges*</Text>
        </Column>
      </Row>
      {[
        "Total Health Care Institution Fees",
        "Total Professional Fees",
        "Grand Total",
      ].map((item, index) => (
        <Row style={styles.tableContainer}>
          <Column style={[styles.tableColumn, { width: "50%" }]}>
            <Text>{item}</Text>
          </Column>
          <Column style={[styles.tableColumn, { width: "50%" }]}>
            <Text></Text>
          </Column>
        </Row>
      ))}

      <Row>
        <CheckBoxInput isSmall={false} customHeight=".2in" customWidth=".2in" />
        <View>
          <Text>
            The benefit of the member/patient was completely consumed prior to
            co-pay OR the benefit of the member/patient is not completely
            consumed BUT with
          </Text>
          <Text>
            purchases/expenses for drugs/medicines, supplies, diagnostics and
            others.
          </Text>
        </View>
      </Row>

      <Row>
        <Text>a.) The total co-pay for the following are:</Text>
      </Row>

      {/* Table */}
      <Row style={[styles.tableContainer]}>
        <Column style={[styles.col1, styles.row1, styles.cell]}></Column>
        <Column style={[styles.col2, styles.row1, styles.cell]}>
          <Text>Total Actual Charges*</Text>
        </Column>
        <Column style={[styles.col3, styles.row1, styles.cell]}>
          <Text>
            Amount after Application of Discount (i.e., personal discount,
            Senior Citizen/PWD)
          </Text>
        </Column>
        <Column style={[styles.col4, styles.row1, styles.cell]}>
          <Text>PhilHealth Benefit</Text>
        </Column>
        <Column style={[styles.col5, styles.row1, styles.cell]}>
          <Text>Amount after PhilHealth Deduction</Text>
        </Column>
      </Row>
      <Row style={[styles.tableContainer]}>
        <Column style={[styles.col1, styles.row2, styles.cell]}>
          <Text>Total Health Care Institution Fees</Text>
        </Column>
        <Column style={[styles.col2, styles.row2, styles.cell]}></Column>
        <Column style={[styles.col3, styles.row2, styles.cell]}></Column>
        <Column style={[styles.col4, styles.row2, styles.cell]}></Column>
        <Column style={[styles.col5, styles.row2, styles.cell]}>
          <FieldInput label="Amount P" width="1.25in" />
          <Text>Paid by (check all that applies):</Text>
          <CheckBoxInput
            isSmall={true}
            customHeight=".2in"
            customWidth=".2in"
            label="Member/Patient"
          />
          <CheckBoxInput
            isSmall={true}
            customHeight=".2in"
            customWidth=".2in"
            label="HMO"
          />
          <CheckBoxInput
            isSmall={true}
            customHeight=".2in"
            customWidth=".2in"
            label="Others (i.e., PCSO, Promisory note, etc.)"
          />
        </Column>
      </Row>
      <Row style={[styles.tableContainer]}>
        <Column style={[styles.col1, styles.row3, styles.cell]}>
          <Text>
            Total Professional Fees (for accredited and non-accredited
            professionals)
          </Text>
        </Column>
        <Column style={[styles.col2, styles.row3, styles.cell]}></Column>
        <Column style={[styles.col3, styles.row3, styles.cell]}></Column>
        <Column style={[styles.col4, styles.row3, styles.cell]}></Column>
        <Column style={[styles.col5, styles.row3, styles.cell]}>
          <FieldInput label="Amount P" width="1.25in" />
          <Text>Paid by (check all that applies):</Text>
          <CheckBoxInput
            isSmall={true}
            customHeight=".2in"
            customWidth=".2in"
            label="Member/Patient"
          />
          <CheckBoxInput
            isSmall={true}
            customHeight=".2in"
            customWidth=".2in"
            label="HMO"
          />
          <CheckBoxInput
            isSmall={true}
            customHeight=".2in"
            customWidth=".2in"
            label="Others (i.e., PCSO, Promisory note, etc.)"
          />
        </Column>
      </Row>

      <Row>
        <Text>
          b.) Purchases/Expenses NOT included in the Health Care Institution
          Charges
        </Text>
      </Row>

      <Row style={[styles.tableContainer]}>
        <Column style={[styles.cell, { width: "4.11in" }]}>
          <Text>
            Total cost of purchase/s for drugs/medicines and/or medical supplies
            bought by the patient/member within/outside the HCI during
            confinement
          </Text>
        </Column>
        <Column style={{ width: "2.89in" }}>
          <CheckBoxInput
            isSmall={true}
            customHeight=".2in"
            customWidth=".2in"
            label="None"
          />
          <CheckBoxInput
            isSmall={true}
            customHeight=".2in"
            customWidth=".2in"
            label="Total Amount"
          />
          <FieldInput label="Amount P" width="1.25in" />
        </Column>
      </Row>
      <Row style={[styles.tableContainer]}>
        <Column style={[styles.cell, { width: "4.11in" }]}>
          <Text>
            Total cost of purchase/s for drugs/medicines and/or medical supplies
            bought by the patient/member within/outside the HCI during
            confinement
          </Text>
        </Column>
        <Column style={[{ width: "2.89in" }]}>
          <CheckBoxInput
            isSmall={true}
            customHeight=".2in"
            customWidth=".2in"
            label="None"
          />
          <CheckBoxInput
            isSmall={true}
            customHeight=".2in"
            customWidth=".2in"
            label="Total Amount"
          />
          <FieldInput label="Amount P" width="1.25in" />
        </Column>
      </Row>
    </Column>
  );
};
