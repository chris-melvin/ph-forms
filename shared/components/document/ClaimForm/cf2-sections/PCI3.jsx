import React from "react";
import Row from "../layout/Row";
import Column from "../layout/Column";
import Heading1 from "../../typography/Heading1";
import { StyleSheet, Text } from "@react-pdf/renderer";
import CheckBoxInput from "../inputs/CheckBoxInput";
import FieldInput from "../inputs/FieldInput";
import BoxTextInput from "../inputs/BoxTextInput";

export const PCI3 = () => {
  const ComponentStyles = StyleSheet.create({
    row: {
      marginTop: ".07in",
    },
    fieldInput: {
      marginRight: ".1in",
    },
    columnContainer: {},
  });
  return (
    <Column
      style={{ fontSize: "7", fontFamily: "Source Sans", fontWeight: "light" }}
    >
      <Row
        style={{
          borderBottom: "1.5 #000 solid",
        }}
      >
        <Column
          style={{
            marginHorizontal: "0.07in",
            marginTop: ".03in",
            marginBottom: ".02in",
          }}
        >
          <Heading1>8. Special Considerations:</Heading1>
        </Column>
      </Row>
      <Row
        style={{
          borderBottom: "1.5 #000 solid",
          height: "3.31in",
        }}
      >
        <Column
          style={{
            margin: "0.07in",
            marginRight: 0,
            marginTop: 0,
          }}
        >
          <Row style={[ComponentStyles.row]}>
            <Text>
              a. For the following repetitive procedures, check box that applies
              and enumerate the procedure/sessions dates [mm-dd-yyyy]. For
              chemotherapy, see guidelines
            </Text>
          </Row>
          <Row
            style={{
              marginLeft: "0.32in",
            }}
          >
            <Column
              style={{
                marginRight: "0.20in",
              }}
            >
              <CheckBoxInput isSmall label={"Hemodialysis"} />
              <CheckBoxInput isSmall label={"Peritoneal Dialysis"} />
              <CheckBoxInput isSmall label={"Radiotherapy (LINAC)"} />
              <CheckBoxInput isSmall label={"Radiotherapy (COBALT)"} />
            </Column>
            <Column
              style={{
                marginRight: "0.20in",
              }}
            >
              <FieldInput
                width={"2.05in"}
                style={{
                  height: "0.17in",
                }}
              />
              <FieldInput
                width={"2.05in"}
                style={{
                  height: "0.17in",
                }}
              />
              <FieldInput
                width={"2.05in"}
                style={{
                  height: "0.17in",
                }}
              />
              <FieldInput
                width={"2.05in"}
                style={{
                  height: "0.17in",
                }}
              />
            </Column>
            <Column
              style={{
                marginRight: "0.20in",
              }}
            >
              <CheckBoxInput isSmall label={"Blood Transfusion"} />
              <CheckBoxInput isSmall label={"Brachytherapy"} />
              <CheckBoxInput isSmall label={"Chemotherapy"} />
              <CheckBoxInput isSmall label={"Simple Debridement"} />
            </Column>
            <Column
              style={{
                marginRight: "0.20in",
              }}
            >
              <FieldInput
                width={"2.05in"}
                style={{
                  height: "0.17in",
                }}
              />
              <FieldInput
                width={"2.05in"}
                style={{
                  height: "0.17in",
                }}
              />
              <FieldInput
                width={"2.05in"}
                style={{
                  height: "0.17in",
                }}
              />
              <FieldInput
                width={"2.05in"}
                style={{
                  height: "0.17in",
                }}
              />
            </Column>
          </Row>
          <Row style={[ComponentStyles.row]}>
            <Text
              style={{
                marginRight: "1.15in",
              }}
            >
              b. For Z-Benefit Package
            </Text>
            <Heading1 fontSize={8.64} style={{ marginRight: "0.09in" }}>
              Z-Benefit Package Code:
            </Heading1>
            <FieldInput width={"2.21in"} />
          </Row>
          <Row style={[ComponentStyles.row]}>
            <Column>
              <Text>
                c. For MCP Package (enumerate four dates [mm-dd-year] of
                pre-natal check-ups)
              </Text>
              <Row>
                <Text
                  style={{
                    marginLeft: "0.08in",
                    marginRight: "0.08in",
                  }}
                >
                  1
                </Text>
                <FieldInput
                  width={"1.80in"}
                  style={{
                    marginRight: "0.17in",
                  }}
                />
                <Text
                  style={{
                    marginRight: "0.05in",
                  }}
                >
                  2
                </Text>
                <FieldInput
                  width={"1.64in"}
                  style={{
                    marginRight: "0.10in",
                  }}
                />
                <Text
                  style={{
                    marginRight: "0.04in",
                  }}
                >
                  3
                </Text>
                <FieldInput
                  width={"1.50in"}
                  style={{
                    marginRight: "0.10in",
                  }}
                />
                <Text
                  style={{
                    marginRight: "0.08in",
                  }}
                >
                  4
                </Text>
                <FieldInput width={"1.77in"} />
              </Row>
            </Column>
          </Row>
          <Row style={[ComponentStyles.row]}>
            <Text>d. For TB DOTS Package</Text>
            <CheckBoxInput isSmall label={"Intensive Phase"} />
            <CheckBoxInput isSmall label={"Maintenance Phase"} />
          </Row>
          <Row style={[ComponentStyles.row]}>
            <Column>
              <Row>
                <Text>
                  e. For Animal Bite Package (write the dates [mm-dd-year] when
                  the following doses of vaccine were given)
                </Text>
                <BoxTextInput>
                  <Heading1 fontSize={8.64}>
                    Note: Anti Rabies Vaccine (ARV), Rabies Immunoglobulin (RIG)
                  </Heading1>
                </BoxTextInput>
              </Row>

              {/* Field input width .81in, .97in, .76in, .93in, .81in */}
              <Row>
                <Heading1 style={[ComponentStyles.fieldInput]} fontSize={8.64}>
                  Day 0 ARV
                </Heading1>
                <FieldInput
                  width=".81in"
                  style={[ComponentStyles.fieldInput]}
                />
                <Heading1 style={[ComponentStyles.fieldInput]} fontSize={8.64}>
                  Day 3 ARV
                </Heading1>
                <FieldInput
                  width=".97in"
                  style={[ComponentStyles.fieldInput]}
                />
                <Heading1 style={[ComponentStyles.fieldInput]} fontSize={8.64}>
                  Day 7 ARV
                </Heading1>
                <FieldInput
                  width=".76in"
                  style={[ComponentStyles.fieldInput]}
                />
                <Heading1 style={[ComponentStyles.fieldInput]} fontSize={8.64}>
                  RIG
                </Heading1>
                <FieldInput
                  width=".93in"
                  style={[ComponentStyles.fieldInput]}
                />
                <Heading1 style={[ComponentStyles.fieldInput]} fontSize={8.64}>
                  Others (Specify)
                </Heading1>
                <FieldInput
                  width=".81in"
                  style={[ComponentStyles.fieldInput]}
                />
              </Row>
            </Column>
          </Row>
          <Row style={[ComponentStyles.row]}>
            <Column>
              <Row>
                <Text style={{ marginRight: ".32in" }}>
                  f. For Newborn Care Package
                </Text>
                <CheckBoxInput
                  isSmall
                  label={"Essential Newborn Care"}
                  style={{ marginRight: ".08in" }}
                />
                <CheckBoxInput
                  isSmall
                  label={"Newborn Hearing Screening Test"}
                  style={{ marginRight: ".08in" }}
                />
                <CheckBoxInput
                  isSmall
                  label={"Newborn Screening Test"}
                  style={{ marginRight: ".08in" }}
                />
              </Row>
              <BoxTextInput style={{ width: "2.56in" }} boxWidth="2.56in">
                <Heading1 fontSize={8.64}>For Essential Newborn Care</Heading1>
                <Text>(check applicable boxes)</Text>
              </BoxTextInput>
            </Column>

            <BoxTextInput
              style={{
                fontStyle: "italic",
                fontFamily: "Source Sans",
                justifySelf: "flex-end",
              }}
            >
              <Text
                style={{
                  marginBottom: "0.09",
                }}
              >
                For Newborn Screening
              </Text>
              <Text>please attach NBS Filter Sticker here</Text>
            </BoxTextInput>
          </Row>
          <Row>
            <Column>
              <CheckBoxInput isSmall label={"Immediate drying of newborn"} />
              <CheckBoxInput isSmall label={"Early skin-to-skin contact"} />
            </Column>
            <Column>
              <CheckBoxInput isSmall label={"Timely cord clamping"} />
              <CheckBoxInput isSmall label={"Eye Prophylaxis"} />
            </Column>
            <Column>
              <CheckBoxInput isSmall label={"Weighing of the newborn"} />
              <CheckBoxInput isSmall label={"Vitamin K administration"} />
            </Column>
            <Column>
              <Row>
                <CheckBoxInput isSmall label={"BCG vaccination"} />
                <CheckBoxInput isSmall label={"Hepatitis B vaccination"} />
              </Row>
              <CheckBoxInput
                isSmall
                label={
                  "Non-separation of mother/baby for early breastfeeding initiation"
                }
              />
            </Column>
          </Row>
          <Row style={ComponentStyles.row}>
            <Text style={{ marginRight: ".57in" }}>
              g. For Outpatient HIV/AIDS Treatment Package
            </Text>
            <Heading1 fontSize={8.64}>Laboratory Number:</Heading1>
            <FieldInput />
          </Row>
        </Column>
      </Row>
      <Row style={{ height: ".44in" }}>
        <Column>
          <Heading1>9. PhilHealth Benefits:</Heading1>
          <Row style={{ marginLeft: ".1in", marginTop: ".07in" }}>
            <Heading1 fontSize={8.64}>ICD 10 or RVS Code:</Heading1>
            <Text>a. First Case Rate</Text>
            <FieldInput width="2.39in" /> <Text>2. Second Case Rate</Text>
            <FieldInput width="2.25in" />
          </Row>
        </Column>
      </Row>
    </Column>
  );
};
