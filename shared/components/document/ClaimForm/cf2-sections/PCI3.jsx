import React from "react";
import Row from "../layout/Row";
import Column from "../layout/Column";
import Heading1 from "../../typography/Heading1";
import { Text } from "@react-pdf/renderer";
import CheckBoxInput from "../inputs/CheckBoxInput";
import FieldInput from "../inputs/FieldInput";
import BoxTextInput from "../inputs/BoxTextInput";

export const PCI3 = () => {
  return (
    <>
      <Row
        style={{
          borderBottom: "1.5 #000 solid",
        }}
      >
        <Column
          style={{
            marginHorizontal: "0.07in",
            marginTop: 0,
          }}
        >
          <Heading1>8. Special Considerations:</Heading1>
        </Column>
      </Row>
      <Row
        style={{
          borderBottom: "1.5 #000 solid",
        }}
      >
        <Column
          style={{
            margin: "0.07in",
            marginRight: 0,
            marginTop: 0,
          }}
        >
          <Row>
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
          <Row>
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
          <Row>
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
          <Row>
            <Text>d. For TB DOTS Package</Text>
            <CheckBoxInput isSmall label={"Intensive Phase"} />
            <CheckBoxInput isSmall label={"Maintenance Phase"} />
          </Row>
          <Row>
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

              <Row>
                <Heading1 fontSize={8.64}>Day 0 ARV</Heading1>
                <FieldInput />
                <Heading1 fontSize={8.64}>Day 3 ARV</Heading1>
                <FieldInput />
                <Heading1 fontSize={8.64}>Day 7 ARV</Heading1>
                <FieldInput />
                <Heading1 fontSize={8.64}>RIG</Heading1>
                <FieldInput />
                <Heading1 fontSize={8.64}>Others (Specify)</Heading1>
                <FieldInput />
              </Row>
            </Column>
          </Row>
          <Row>
            <Column>
              <Row>
                <Text>f. For Newborn Care Package</Text>
                <CheckBoxInput isSmall label={"Essential Newborn Care"} />
                <CheckBoxInput
                  isSmall
                  label={"Newborn Hearing Screening Test"}
                />
                <CheckBoxInput isSmall label={"Newborn Screening Test"} />
                <CheckBoxInput isSmall label={"Newborn Screening Test"} />
              </Row>
              <BoxTextInput>
                <Row>
                  <Heading1 fontSize={8.64}>
                    For Essential Newborn Care
                  </Heading1>
                  <Text>(check applicable boxes)</Text>
                </Row>
              </BoxTextInput>
            </Column>

            <BoxTextInput>
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
          <Row>
            <Text>g. For Outpatient HIV/AIDS Treatment Package</Text>
            <Heading1 fontSize={8.64}>Laboratory Number:</Heading1>
            <FieldInput />
          </Row>
        </Column>
      </Row>
      <Row>
        <Column>
          <Heading1>9. PhilHealth Benefits:</Heading1>
          <Row>
            <Heading1 fontSize={8.64}>ICD 10 or RVS Code:</Heading1>
            <Text>a. First Case Rate</Text>
            <FieldInput /> <Text>2. Second Case Rate</Text>
            <FieldInput />
          </Row>
        </Column>
      </Row>
    </>
  );
};
