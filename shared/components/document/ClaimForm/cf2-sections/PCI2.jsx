import React from "react";
import Row from "../layout/Row";
import Column from "../layout/Column";
import Heading1 from "../../typography/Heading1";
import StackedLines from "../inputs/StackedLines";
import { StyleSheet, Text } from "@react-pdf/renderer";
import { styles } from "../forms/ClaimForm2";
import CheckBoxInput from "../../inputs/CheckBoxInput";

const ComponentStyles = StyleSheet.create({
  fieldLabel: {
    marginBottom: ".04in",
  },
});
// Patient Confinement Information 2 - 6 to 7
export const PCI2 = () => {
  const CHECKBOX_CONFIG = {
    customHeight: ".17in",
    customWidth: ".17in",
    marginBottom: 0,
    labelStyle: [
      styles.bodyText,
      styles.checkBoxLabel,
      { marginLeft: ".05in" },
    ],
  };
  return (
    <>
      <Row
        style={{
          borderBottom: "1.5 #000 solid",
          height: ".51in",
        }}
      >
        <Column
          style={{
            marginHorizontal: "0.07in",
            marginTop: 0,
            height: "0.50in",
          }}
        >
          <Heading1>6. Admission Diagnosis/es: </Heading1>
        </Column>
      </Row>
      <Row
        style={{
          borderBottom: "1.5 #000 solid",
          height: "1.45in",
        }}
      >
        <Column
          style={{
            margin: "0.07in",
            marginTop: 0,
            marginBottom: 0,
          }}
        >
          <Row
            style={{
              alignItems: "center",
            }}
          >
            <Heading1
              style={{
                marginRight: "0.04in",
              }}
            >
              7. Discharge Diagnosis/es
            </Heading1>
            <Text style={[styles.bodyText]}>
              (Use additional CF2 if necessary):
            </Text>
          </Row>
          <Row
            style={{
              marginLeft: "0.20in",
            }}
          >
            <Column
              style={{
                marginRight: "0.17in",
              }}
            >
              <Text
                style={[
                  styles.bodyText,
                  {
                    marginLeft: "0.29in",
                  },
                ]}
              >
                Diagnosis
              </Text>
              <Row>
                <Column
                  style={[
                    styles.bodyText,
                    {
                      marginRight: "0.09in",
                    },
                  ]}
                >
                  <Text style={{ marginBottom: "0.25in" }}>a.</Text>
                  <Text>b.</Text>
                </Column>
                <Column>
                  <StackedLines numLines={6} />
                </Column>
              </Row>
            </Column>
            <Column
              style={[
                styles.bodyText,

                {
                  marginRight: "0.09in",
                },
              ]}
            >
              <Text
                style={{
                  marginLeft: "0.10in",
                }}
              >
                ICD-10 Code/s
              </Text>
              <StackedLines numLines={6} />
            </Column>
            <Column
              style={[
                styles.bodyText,
                {
                  marginRight: "0.17in",
                },
              ]}
            >
              <Text
                style={{
                  alignSelf: "center",
                }}
              >
                Related Procedure/s (if there’s any)
              </Text>
              <Row>
                <Column
                  style={{
                    marginRight: "0.05in",
                  }}
                >
                  <Text style={ComponentStyles.fieldLabel}>i.</Text>
                  <Text style={ComponentStyles.fieldLabel}>ii.</Text>
                  <Text style={ComponentStyles.fieldLabel}>iii.</Text>
                  <Text style={ComponentStyles.fieldLabel}>i.</Text>
                  <Text style={ComponentStyles.fieldLabel}>ii.</Text>
                  <Text style={ComponentStyles.fieldLabel}>iii.</Text>
                </Column>
                <Column>
                  <StackedLines numLines={6} lineWidth="1.60in" />
                </Column>
              </Row>
            </Column>
            <Column style={[styles.bodyText, { marginRight: "0.17in" }]}>
              <Text
                style={{
                  alignSelf: "center",
                }}
              >
                RVS Code
              </Text>
              <Column>
                <StackedLines numLines={6} lineWidth="0.84in" />
              </Column>
            </Column>
            <Column
              style={[
                styles.bodyText,
                {
                  marginRight: "0.21in",
                },
              ]}
            >
              <Text
                style={{
                  alignSelf: "center",
                }}
              >
                Date of Procedure
              </Text>
              <Column>
                <StackedLines numLines={6} lineWidth="0.88in" />
              </Column>
            </Column>
            <Column>
              <Text
                style={[
                  styles.bodyText,
                  {
                    alignSelf: "center",
                  },
                ]}
              >
                Laterality (check applicable box)
              </Text>
              <Column>
                <Row>
                  <Column
                    style={{
                      marginRight: "0.10in",
                    }}
                  >
                    <CheckBoxInput {...CHECKBOX_CONFIG} label="left" />
                    <CheckBoxInput {...CHECKBOX_CONFIG} label="left" />
                    <CheckBoxInput {...CHECKBOX_CONFIG} label="left" />
                    <CheckBoxInput {...CHECKBOX_CONFIG} label="left" />
                    <CheckBoxInput {...CHECKBOX_CONFIG} label="left" />
                    <CheckBoxInput {...CHECKBOX_CONFIG} label="left" />
                  </Column>
                  <Column
                    style={{
                      marginRight: "0.10in",
                    }}
                  >
                    <CheckBoxInput {...CHECKBOX_CONFIG} label="right" />
                    <CheckBoxInput {...CHECKBOX_CONFIG} label="right" />
                    <CheckBoxInput {...CHECKBOX_CONFIG} label="right" />
                    <CheckBoxInput {...CHECKBOX_CONFIG} label="right" />
                    <CheckBoxInput {...CHECKBOX_CONFIG} label="right" />
                    <CheckBoxInput {...CHECKBOX_CONFIG} label="right" />
                  </Column>
                  <Column>
                    <CheckBoxInput {...CHECKBOX_CONFIG} label="both" />
                    <CheckBoxInput {...CHECKBOX_CONFIG} label="both" />
                    <CheckBoxInput {...CHECKBOX_CONFIG} label="both" />
                    <CheckBoxInput {...CHECKBOX_CONFIG} label="both" />
                    <CheckBoxInput {...CHECKBOX_CONFIG} label="both" />
                    <CheckBoxInput {...CHECKBOX_CONFIG} label="left" />
                  </Column>
                </Row>
              </Column>
            </Column>
          </Row>
        </Column>
      </Row>
    </>
  );
};
