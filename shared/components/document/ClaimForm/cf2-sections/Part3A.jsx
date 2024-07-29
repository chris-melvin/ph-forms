import React from "react";
import Column from "../layout/Column";
import CheckBoxInput from "../../inputs/CheckBoxInput";
import Row from "../layout/Row";
import { StyleSheet, Text, View } from "@react-pdf/renderer";
import Heading1 from "../../typography/Heading1";
import FieldInput from "../inputs/FieldInput";
import { styles } from "../forms/ClaimForm2";
import BoldText from "../../typography/BoldText";

const ComponentStyles = StyleSheet.create({
  rowStyle: {
    borderTopWidth: 1,
    width: "100%",
  },
  columnContainer: {
    fontFamily: "Source Sans",
    fontWeight: "light",
    fontSize: "7.64px",
  },
  tableColumn: {
    borderRightWidth: 1,
  },
  tableContainer: {
    width: "7in",
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    marginHorizontal: "auto",
  },
  tableHeader: {
    borderTopWidth: 1,
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
  textFields: {
    alignItems: "center",
  },
  row: {
    marginBottom: ".07in",
  },
  CheckBoxContainer: {
    marginTop: ".07in",
    marginLeft: ".2in",
  },
  cellText: {
    marginLeft: ".07in",
    marginTop: ".03in",
    marginBottom: ".02in",
  },
  tableLabel: { marginLeft: ".50in", marginBottom: ".03in" },

  checkBoxCell: {
    flexDirection: "row",
    alignItems: "center",
  },

  tableCellText: {
    marginLeft: ".07in",
    marginTop: ".05in",
    marginBottom: ".05in",
  },
  tableCellHeader: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export const Part3A = () => {
  const CHECKBOX_CONFIG = {
    customHeight: ".13in",
    customWidth: ".13in",
    marginBottom: 0,
    labelStyle: [
      styles.bodyText,
      { marginLeft: ".05in", fontWeight: "extralight", fontSize: "7px" },
    ],
  };
  return (
    <Column style={ComponentStyles.columnContainer}>
      <Row
        style={[
          ComponentStyles.row,
          { marginTop: ".07in", marginLeft: ".07in" },
        ]}
      >
        <Heading1>A.CERTIFICATION OF CONSUMPTION OF BENEFITS:</Heading1>
      </Row>
      <Row style={[ComponentStyles.row, ComponentStyles.CheckBoxContainer]}>
        <CheckBoxInput
          isSmall={false}
          customHeight=".2in"
          customWidth=".2in"
          style={{ marginRight: ".1in" }}
        />
        <View>
          <Text>PhilHealth benefit is enough to cover HCI and PF Charges.</Text>
          <Text>
            No purchase of drugs/medicines, supplies, diagnostics, and co-pay
            for professional fees by the member/patient.
          </Text>
        </View>
      </Row>

      <Row
        style={[ComponentStyles.tableContainer, ComponentStyles.tableHeader]}
      >
        <Column style={[ComponentStyles.tableColumn, { width: "4.2in" }]}>
          <Text></Text>
        </Column>
        <Column
          style={[
            ComponentStyles.tableColumn,
            { width: "4.2in", alignItems: "center" },
          ]}
        >
          <Text style={[ComponentStyles.cellText]}>Total Actual Charges*</Text>
        </Column>
      </Row>
      {[
        "Total Health Care Institution Fees",
        "Total Professional Fees",
        "Grand Total",
      ].map((item, index) => (
        <Row style={ComponentStyles.tableContainer}>
          <Column style={[ComponentStyles.tableColumn, { width: "50%" }]}>
            <Text style={[ComponentStyles.cellText]}>{item}</Text>
          </Column>
          <Column style={[ComponentStyles.tableColumn, { width: "50%" }]}>
            <Text></Text>
          </Column>
        </Row>
      ))}

      <Row style={[ComponentStyles.row, ComponentStyles.CheckBoxContainer]}>
        <CheckBoxInput
          isSmall={false}
          customHeight=".2in"
          customWidth=".2in"
          style={{ marginRight: ".1in" }}
        />
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
        <Text style={[ComponentStyles.tableLabel]}>
          a.) The total co-pay for the following are:
        </Text>
      </Row>

      {/* Table */}
      <Row
        style={[ComponentStyles.tableContainer, ComponentStyles.tableHeader]}
      >
        <Column
          style={[
            ComponentStyles.col1,
            ComponentStyles.row1,
            ComponentStyles.cell,
          ]}
        ></Column>
        <Column
          style={[
            ComponentStyles.col2,
            ComponentStyles.row1,
            ComponentStyles.cell,
            ComponentStyles.tableCellHeader,
          ]}
        >
          <Text>Total Actual Charges*</Text>
        </Column>
        <Column
          style={[
            ComponentStyles.col3,
            ComponentStyles.row1,
            ComponentStyles.cell,
            ComponentStyles.tableCellHeader,
            {
              textAlign: "center",
            },
          ]}
        >
          <Text>
            Amount after Application of Discount (i.e., personal discount,
            Senior Citizen/PWD)
          </Text>
        </Column>
        <Column
          style={[
            ComponentStyles.col4,
            ComponentStyles.row1,
            ComponentStyles.cell,
            ComponentStyles.tableCellHeader,
          ]}
        >
          <Text>PhilHealth Benefit</Text>
        </Column>
        <Column
          style={[
            ComponentStyles.col5,
            ComponentStyles.row1,
            ComponentStyles.cell,
            ComponentStyles.tableCellHeader,
          ]}
        >
          <Text>Amount after PhilHealth Deduction</Text>
        </Column>
      </Row>
      <Row style={[ComponentStyles.tableContainer]}>
        <Column
          style={[
            ComponentStyles.col1,
            ComponentStyles.row2,
            ComponentStyles.cell,
            { justifyContent: "center", paddingLeft: ".05in" },
          ]}
        >
          <Text>Total Health </Text>
          <Text>Care Institution Fees</Text>
        </Column>
        <Column
          style={[
            ComponentStyles.col2,
            ComponentStyles.row2,
            ComponentStyles.cell,
          ]}
        ></Column>
        <Column
          style={[
            ComponentStyles.col3,
            ComponentStyles.row2,
            ComponentStyles.cell,
          ]}
        ></Column>
        <Column
          style={[
            ComponentStyles.col4,
            ComponentStyles.row2,
            ComponentStyles.cell,
          ]}
        ></Column>
        <Column
          style={[
            ComponentStyles.col5,
            ComponentStyles.row2,
            ComponentStyles.cell,
            { padding: ".07in" },
          ]}
        >
          <Row>
            <Text>Amout P</Text>

            <FieldInput width="1.25in" />
          </Row>
          <Text style={{ marginBottom: ".05in" }}>
            Paid by (check all that applies):
          </Text>
          <Row>
            <CheckBoxInput
              {...CHECKBOX_CONFIG}
              style={{ marginBottom: ".05in", marginRight: ".1in" }}
              label="Member/Patient"
            />
            <CheckBoxInput
              {...CHECKBOX_CONFIG}
              style={{ marginBottom: ".05in", marginRight: ".1in" }}
              label="HMO"
            />
          </Row>
          <CheckBoxInput
            {...CHECKBOX_CONFIG}
            style={{ marginBottom: ".05in" }}
            label="Others (i.e., PCSO, Promisory note, etc.)"
          />
        </Column>
      </Row>
      <Row style={[ComponentStyles.tableContainer]}>
        <Column
          style={[
            ComponentStyles.col1,
            ComponentStyles.row3,
            ComponentStyles.cell,
            { justifyContent: "center", paddingLeft: ".05in" },
          ]}
        >
          <Text>Total Professional</Text>
          <Text>Fees (for accredited </Text>
          <Text>and non-accredited </Text>
          <Text>professionals)</Text>
        </Column>
        <Column
          style={[
            ComponentStyles.col2,
            ComponentStyles.row3,
            ComponentStyles.cell,
          ]}
        ></Column>
        <Column
          style={[
            ComponentStyles.col3,
            ComponentStyles.row3,
            ComponentStyles.cell,
          ]}
        ></Column>
        <Column
          style={[
            ComponentStyles.col4,
            ComponentStyles.row3,
            ComponentStyles.cell,
          ]}
        ></Column>
        <Column
          style={[
            ComponentStyles.col5,
            ComponentStyles.row3,
            ComponentStyles.cell,
            {
              padding: ".07in",
            },
          ]}
        >
          <Row>
            <Text>Amout P</Text>

            <FieldInput width="1.25in" />
          </Row>
          <Text style={{ marginBottom: ".05in" }}>
            Paid by (check all that applies):
          </Text>
          <Row>
            <CheckBoxInput
              {...CHECKBOX_CONFIG}
              style={{ marginBottom: ".05in", marginRight: ".1in" }}
              label="Member/Patient"
            />
            <CheckBoxInput
              {...CHECKBOX_CONFIG}
              style={{ marginBottom: ".05in", marginRight: ".1in" }}
              label="HMO"
            />
          </Row>
          <CheckBoxInput
            {...CHECKBOX_CONFIG}
            style={{ marginBottom: ".05in" }}
            label="Others (i.e., PCSO, Promisory note, etc.)"
          />
        </Column>
      </Row>

      <Row>
        <Text style={[ComponentStyles.tableLabel]}>
          b.) Purchases/Expenses{" "}
          <Text style={{ fontWeight: "bold", fontFamily: "Source Sans" }}>
            NOT
          </Text>{" "}
          included in the Health Care Institution Charges
        </Text>
      </Row>

      <Row
        style={[ComponentStyles.tableContainer, ComponentStyles.tableHeader]}
      >
        <Column style={[ComponentStyles.cell, { width: "4.11in" }]}>
          <Text style={[ComponentStyles.tableCellText]}>
            Total cost of purchase/s for drugs/medicines and/or medical supplies
            bought by the patient/member within/outside the HCI during
            confinement
          </Text>
        </Column>
        <Column
          style={[
            ComponentStyles.cell,
            ComponentStyles.checkBoxCell,
            ,
            { width: "2.89in", paddingLeft: ".07in" },
          ]}
        >
          <CheckBoxInput
            {...CHECKBOX_CONFIG}
            label="None"
            style={{ marginRight: ".3in" }}
          />
          <CheckBoxInput
            {...CHECKBOX_CONFIG}
            style={{ marginRight: ".1in" }}
            label="Total Amount"
          />
          <Text>P</Text> <FieldInput width="1in" />
        </Column>
      </Row>
      <Row style={[ComponentStyles.tableContainer]}>
        <Column style={[ComponentStyles.cell, { width: "4.11in" }]}>
          <Text style={[ComponentStyles.tableCellText]}>
            Total cost of purchase/s for drugs/medicines and/or medical supplies
            bought by the patient/member within/outside the HCI during
            confinement
          </Text>
        </Column>
        <Column
          style={[
            ComponentStyles.cell,
            ComponentStyles.checkBoxCell,
            { width: "2.89in", paddingLeft: ".07in" },
          ]}
        >
          <CheckBoxInput
            {...CHECKBOX_CONFIG}
            label="None"
            style={{ marginRight: ".3in" }}
          />
          <CheckBoxInput
            {...CHECKBOX_CONFIG}
            style={{ marginRight: ".1in" }}
            label="Total Amount"
          />
          <Text>P</Text> <FieldInput width="1in" />
        </Column>
      </Row>
      <Row
        style={[
          { marginLeft: ".52in", marginBottom: ".1in", marginTop: ".07" },
        ]}
      >
        <BoldText>* NOTE:</BoldText>
        <Text>
          Total Actual Charges should be based on Statement of Account (SOA)
        </Text>
      </Row>
    </Column>
  );
};
