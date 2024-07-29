import React from "react";
import Row from "../layout/Row";
import Column from "../layout/Column";
import Heading1 from "../../typography/Heading1";
import { StyleSheet, Text } from "@react-pdf/renderer";
import FieldInput from "../inputs/FieldInput";
import BoxTextInput from "../inputs/BoxTextInput";
import { styles } from "../forms/ClaimForm2";
import CheckBoxInput from "../../inputs/CheckBoxInput";

const ComponentStyles = StyleSheet.create({
  row: {
    marginBottom: ".07in",
    marginLeft: ".2in",
  },
  fieldInput: {
    marginRight: ".1in",
  },
  columnContainer: {},
});
export const PCI3 = () => {
  const CHECKBOX_CONFIG = {
    customHeight: ".17in",
    customWidth: ".17in",
    marginBottom: ".05in",
    labelStyle: [
      styles.bodyText,
      styles.checkBoxLabel,
      { marginLeft: ".05in", fontSize: 7 },
    ],
  };
  return (
    <Column
      style={{
        fontSize: "7.5",
        fontFamily: "Source Sans",
        fontWeight: "light",
      }}
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
          marginTop: ".03in",
        }}
      >
        <Column
          style={{
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
              <CheckBoxInput {...CHECKBOX_CONFIG} label={"Hemodialysis"} />
              <CheckBoxInput
                {...CHECKBOX_CONFIG}
                label={"Peritoneal Dialysis"}
              />
              <CheckBoxInput
                {...CHECKBOX_CONFIG}
                label={"Radiotherapy (LINAC)"}
              />
              <CheckBoxInput
                {...CHECKBOX_CONFIG}
                label={"Radiotherapy (COBALT)"}
              />
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
              <CheckBoxInput {...CHECKBOX_CONFIG} label={"Blood Transfusion"} />
              <CheckBoxInput {...CHECKBOX_CONFIG} label={"Brachytherapy"} />
              <CheckBoxInput {...CHECKBOX_CONFIG} label={"Chemotherapy"} />
              <CheckBoxInput
                {...CHECKBOX_CONFIG}
                label={"Simple Debridement"}
              />
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
              <Row style={{ marginTop: ".07in" }}>
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
          <Row style={[ComponentStyles.row, { alignItems: "center" }]}>
            <Text style={{ marginRight: ".31in" }}>d. For TB DOTS Package</Text>
            <CheckBoxInput
              {...CHECKBOX_CONFIG}
              label={"Intensive Phase"}
              style={{ marginRight: ".36in" }}
            />
            <CheckBoxInput {...CHECKBOX_CONFIG} label={"Maintenance Phase"} />
          </Row>
          <Row style={[ComponentStyles.row]}>
            <Column>
              <Row style={{ justifyContent: "space-between" }}>
                <Text>
                  e. For Animal Bite Package (write the dates [mm-dd-year] when
                  the following doses of vaccine were given)
                </Text>
                <BoxTextInput style={{ paddingBottom: ".04in" }}>
                  <Heading1 fontSize={8}>
                    Note: Anti Rabies Vaccine (ARV), Rabies Immunoglobulin (RIG)
                  </Heading1>
                </BoxTextInput>
              </Row>

              {/* Field input width .81in, .97in, .76in, .93in, .81in */}
              <Row style={{ marginLeft: ".1in" }}>
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
                  {...CHECKBOX_CONFIG}
                  label={"Essential Newborn Care"}
                  style={{ marginRight: ".08in" }}
                />
                <CheckBoxInput
                  {...CHECKBOX_CONFIG}
                  label={"Newborn Hearing Screening Test"}
                  style={{ marginRight: ".08in" }}
                />
                <CheckBoxInput
                  {...CHECKBOX_CONFIG}
                  label={"Newborn Screening Test"}
                  style={{ marginRight: ".08in" }}
                />
              </Row>
              <BoxTextInput
                style={{
                  width: "2.57in",
                  paddingBottom: ".04in",
                  paddingHorizontal: ".07in",
                }}
                boxWidth="2.57in"
              >
                <Row>
                  <Heading1 fontSize={7.5} style={{ marginRight: ".02in" }}>
                    For Essential Newborn Care
                  </Heading1>
                  <Text>(check applicable boxes)</Text>
                </Row>
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
          <Row
            style={{
              marginLeft: "0.32in",
            }}
          >
            <Column>
              <CheckBoxInput
                {...CHECKBOX_CONFIG}
                label={"Immediate drying of newborn"}
              />
              <CheckBoxInput
                {...CHECKBOX_CONFIG}
                label={"Early skin-to-skin contact"}
              />
            </Column>
            <Column
              style={{
                marginLeft: "0.31in",
              }}
            >
              <CheckBoxInput
                {...CHECKBOX_CONFIG}
                label={"Timely cord clamping"}
              />
              <CheckBoxInput {...CHECKBOX_CONFIG} label={"Eye Prophylaxis"} />
            </Column>
            <Column
              style={{
                marginLeft: "0.31in",
              }}
            >
              <CheckBoxInput
                {...CHECKBOX_CONFIG}
                label={"Weighing of the newborn"}
              />
              <CheckBoxInput
                {...CHECKBOX_CONFIG}
                label={"Vitamin K administration"}
              />
            </Column>
            <Column
              style={{
                marginLeft: "0.31in",
              }}
            >
              <Row>
                <CheckBoxInput
                  {...CHECKBOX_CONFIG}
                  label={"BCG vaccination"}
                  style={{
                    marginRight: "0.31in",
                  }}
                />
                <CheckBoxInput
                  {...CHECKBOX_CONFIG}
                  label={"Hepatitis B vaccination"}
                />
              </Row>
              <CheckBoxInput
                {...CHECKBOX_CONFIG}
                label={
                  "Non-separation of mother/baby for early breastfeeding initiation"
                }
              />
            </Column>
          </Row>
          <Row style={[ComponentStyles.row, { alignItems: "flex-end" }]}>
            <Text style={{ marginRight: ".57in" }}>
              g. For Outpatient HIV/AIDS Treatment Package
            </Text>
            <Heading1 fontSize={8.64}>Laboratory Number:</Heading1>
            <FieldInput width="2in" />
          </Row>
        </Column>
      </Row>
      <Row style={{ height: ".44in", paddingLeft: ".07in" }}>
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
