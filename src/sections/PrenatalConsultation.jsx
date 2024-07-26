import { StyleSheet, View, Text } from "@react-pdf/renderer";
import Column from "../components/layout/Column";
import Row from "../components/layout/Row";
import SegmentedLineInput from "../components/SegmentedLineInput";
import WideLineInput from "../components/Inputs/WideLineInput";
import TimeInput from "../components/Inputs/TimeInput";
import SegmentedDate from "../components/SegmentedDate";
import FieldInput from "../../shared/components/document/inputs/FieldInput";
import TextInput from "../../shared/components/document/inputs/TextInput";
import CheckBoxInput from "../../shared/components/document/inputs/CheckBoxInput";
import StackedBoxInput from "../../shared/components/document/inputs/StackedBoxInput";
import { LabeledCheckboxList } from "../components/LabeledCheckboxList";

export const PrenatalConsultation = () => {
  const styles = StyleSheet.create({
    text: {
      fontFamily: "Arial Narrow",
      fontStretch: "condensed",
    },
    flexRowSpaceBetween: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    commaStyle: { fontSize: "9.36px", transform: "translate(0,2)" },
  });
  return (
    <>
      <Row
        style={{
          marginVertical: ".1in",
          paddingLeft: ".25in",
          paddingRight: ".1in",
          ...styles.text,
        }}
      >
        <View style={{ marginRight: ".58in" }}>
          <Text style={{ color: "#ff0000" }}>
            1. Initial Prenatal Consultation
          </Text>
        </View>
        <View style={{ marginRight: ".3in" }}>
          <SegmentedDate
            boxWidth=".12in"
            style={{ paddingTop: 0 }}
            fontSize="6.24px"
          />
        </View>
      </Row>

      {/* 2 */}
      <View
        style={{
          marginRight: ".3in",
          paddingLeft: ".25in",
          paddingRight: ".1in",
          ...styles.text,
        }}
      >
        <Text>
          <Text style={{ color: "#f00" }}>2.</Text> Clinical History and
          Physical Examination
        </Text>
      </View>
      <Row
        style={{
          marginTop: ".1in",
          paddingLeft: ".25in",
          paddingRight: ".1in",
          ...styles.text,
        }}
      >
        <Row>
          <Column
            style={{
              marginLeft: ".04in",
              width: "2.38in",
              marginRight: ".25in",
            }}
          >
            <View
              style={[
                styles.flexRowSpaceBetween,
                {
                  marginBottom: ".12in",
                },
              ]}
            >
              <View>
                <Text>
                  <Text style={{ color: "#f00" }}>a.{"  "}</Text>
                  Vital signs are normal
                </Text>
              </View>
              <View>
                <CheckBoxInput
                  isSmall={false}
                  customHeight=".16in"
                  customWidth=".12in"
                />
              </View>
            </View>
            <View style={[styles.flexRowSpaceBetween]}>
              <View>
                <Text>
                  <Text style={{ color: "#f00" }}>b{"  "}</Text> Ascertain the
                  present Pregnancy is low-Risk
                </Text>
              </View>
              <View>
                <CheckBoxInput
                  isSmall={false}
                  customHeight=".16in"
                  customWidth=".12in"
                />
              </View>
            </View>
          </Column>
          <Column style={{ width: "4.14in" }}>
            <View
              style={[styles.flexRowSpaceBetween, { marginBottom: ".12in" }]}
            >
              <View style={{ marginRight: ".15in" }}>
                <Text>
                  <Text style={{ color: "#f00" }}>c.{"  "}</Text> Menstrual
                  History
                </Text>
              </View>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text>LMP</Text>
                <SegmentedDate
                  style={{ paddingTop: 0 }}
                  fontSize="6.24px"
                  boxWidth=".12in"
                  labelMarginTop=".02in"
                />
                <View>
                  <TextInput
                    label="Age of Menarche"
                    labelStyle={{
                      marginLeft: ".1in",
                      fontFamily: "Arial Narrow",
                    }}
                    width=".50in"
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                fontFamily: "Arial",
              }}
            >
              <View>
                <Text style={{ marginRight: ".2in" }}>
                  <Text style={{ color: "#f00", fontFamily: "Arial Narrow" }}>
                    d.{"  "}
                  </Text>
                  Obstetric History
                </Text>
              </View>
              <View style={{ marginRight: ".15in" }}>
                <TextInput
                  label="G"
                  style={{ fontSize: "8.64px" }}
                  width=".3in"
                />
              </View>
              <View>
                <TextInput
                  label="P"
                  style={{ fontSize: "8.64px" }}
                  width=".36in"
                />
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Text>(</Text>

                <StackedBoxInput
                  boxWidth=".30in"
                  lowerText="T"
                  style={{ paddingTop: ".1in" }}
                />
                <Text style={styles.commaStyle}>,</Text>
                <StackedBoxInput
                  boxWidth=".24in"
                  lowerText="P"
                  style={{ paddingTop: ".1in" }}
                />
                <Text style={styles.commaStyle}>,</Text>
                <StackedBoxInput
                  boxWidth=".24in"
                  lowerText="A"
                  style={{ paddingTop: ".1in" }}
                />
                <Text style={styles.commaStyle}>,</Text>
                <StackedBoxInput
                  boxWidth=".24in"
                  lowerText="L"
                  style={{ paddingTop: ".1in" }}
                />
                <Text>)</Text>
              </View>
            </View>
          </Column>
        </Row>
      </Row>
      {/* 3 */}
      <View
        style={{
          paddingLeft: ".25in",
          paddingRight: ".1in",
          marginBottom: ".07in",
          ...styles.text,
        }}
      >
        <Text>
          <Text style={{ color: "#f00", marginBottom: ".2in" }}>3.</Text>
          Obstetric risk factors
        </Text>
      </View>
      <Row
        style={{
          paddingLeft: ".25in",
          paddingRight: ".1in",
          ...styles.text,
        }}
      >
        <LabeledCheckboxList
          array={[
            "a.  Multiple Pregnancy",
            "b.  Ovarian cyst",
            "c.  Myoma uteri",
          ]}
          width="1.22in"
          marginRight=".30in"
        />

        <LabeledCheckboxList
          array={[
            "d.  Placenta previa",
            "e.  History of 3 miscarriages",
            "f.   History of stillbirth",
          ]}
          width="1.450in"
          marginRight=".3in"
        />
        <LabeledCheckboxList
          array={[
            "g.  History of pre-eclampsia",
            "h.  History of eclampsia",
            "i.  Premature contraction",
          ]}
          width="1.35in"
          marginRight=".4in"
        />
        <LabeledCheckboxList array={[]} width="1.8in" />
      </Row>
      {/* 4 */}
      <View
        style={{
          paddingLeft: ".25in",
          paddingRight: ".1in",
          marginBottom: ".1in",
          marginTop: ".07in",
          ...styles.text,
        }}
      >
        <Text>
          <Text style={{ color: "#f00", marginBottom: ".2in" }}>4. </Text>
          Medical/Surgical risk factors
        </Text>
      </View>
      <Row
        style={{
          paddingLeft: ".25in",
          paddingRight: ".1in",
          ...styles.text,
        }}
      >
        <LabeledCheckboxList
          array={["a.  Hypertension", "b.  Heart Disease", "c.  Diabetes"]}
          width="1.22in"
          marginRight=".30in"
        />

        <LabeledCheckboxList
          array={[
            "d.  Thyroid Disorder",
            "e.  Obesity",
            "f.  Moderate to severe asthma",
          ]}
          width="1.45in"
          marginRight=".3in"
        />

        <LabeledCheckboxList
          array={[
            "g.  Epilepsy",
            "h.  Renal disease",
            "i.  Bleeding disorders",
          ]}
          width="1.35in"
          marginRight=".4in"
        />

        <LabeledCheckboxList
          array={[
            "j.  History of previous cesarian section",
            "k.  History of uterine myomectomy",
          ]}
          width="1.80in"
        />
      </Row>

      {/* 5 */}
      <View
        style={{
          marginTop: ".15in",
          marginBottom: ".12in",
          flexDirection: "row",
          paddingLeft: ".25in",
          paddingRight: ".1in",
          ...styles.text,
        }}
      >
        <View style={{ width: "1in", marginRight: ".15in" }}>
          <Text>
            <Text style={{ color: "#f00" }}>5.</Text> Admitting Diagnosis
          </Text>
        </View>
        <View
          style={{
            width: "6.18in",
            borderBottom: 0.7,
            paddingTop: ".15in",
            borderColor: "#000",
          }}
        ></View>
      </View>
      {/* 6 */}
      <Row
        style={{ paddingLeft: ".25in", paddingRight: ".1in", ...styles.text }}
      >
        <Text>
          <Text style={{ color: "#f00" }}>6.</Text> Delivery Plan
        </Text>
      </Row>

      <Row
        style={{
          marginLeft: ".1in",
          marginTop: ".24in",
          marginBottom: ".19in",
          paddingLeft: ".25in",
          paddingRight: ".1in",
          ...styles.text,
        }}
      >
        <View style={{ marginRight: ".45in" }}>
          <Text>
            <Text style={{ color: "#f00" }}>a.</Text> Orientation to
            MCP/Availment of Benefits
          </Text>
        </View>
        <View style={{ marginRight: ".05in" }}>
          <CheckBoxInput
            isSmall={false}
            customHeight=".18in"
            customWidth=".15in"
          />
          <Text style={{ fontStyle: "italic", fontSize: "7.8px" }}>yes</Text>
        </View>
        <View>
          <CheckBoxInput
            isSmall={false}
            customHeight=".18in"
            customWidth=".15in"
          />
          <Text>no</Text>
        </View>
        <View style={{ marginLeft: ".75in" }}>
          <Text>
            <Text style={{ color: "#f00" }}>b.</Text> Expected date of delivery
          </Text>
        </View>
        <View>
          <SegmentedDate
            style={{ paddingTop: 0 }}
            fontSize="6.24px"
            boxWidth=".12in"
            labelMarginTop=".01in"
          />
        </View>
      </Row>

      {/* 7 */}
      <Row
        style={{
          paddingLeft: ".25in",
          paddingRight: ".1in",
          marginBottom: ".2in",
          ...styles.text,
        }}
      >
        <View>
          <Text>
            <Text style={{ color: "#f00", marginBottom: ".07in" }}>7.</Text>
            Follow-up Prenatal Consultation
          </Text>
        </View>
      </Row>
      <Row
        style={{
          justifyContent: "space-between",
          marginRight: ".1in",
          paddingLeft: ".25in",
          paddingRight: ".1in",
          marginBottom: ".1in",
          ...styles.text,
        }}
      >
        <View>
          <Text>
            <Text style={{ color: "#f00" }}>a. </Text>
            Prenatal Consultation No.
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          {Array.from(Array(11).keys()).map((item) => (
            <View
              key={item}
              style={{
                borderWidth: 1,
                height: ".165in",
                width: ".32in",
                paddingTop: ".01in",
                marginLeft: ".23in",
              }}
            >
              <Text style={{ fontSize: "7.8px", marginHorizontal: "auto" }}>
                {item + 2}
                {item + 2 === 1
                  ? "st"
                  : item + 2 === 2
                  ? "nd"
                  : item + 2 === 3
                  ? "rd"
                  : "th"}
              </Text>
            </View>
          ))}
        </View>
      </Row>

      <Row
        style={{
          justifyContent: "space-between",
          marginBottom: ".03in",
          paddingLeft: ".25in",
          paddingRight: ".1in",
          ...styles.text,
        }}
      >
        <View>
          <Text>
            <Text style={{ color: "#f00" }}>b.</Text> Date of visit{" "}
            <Text style={{ fontSize: "5.4px" }}>(mm/ dd/ yy)</Text>
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          {Array.from(Array(11).keys()).map((item, index) => (
            <View key={item}>
              <SegmentedLineInput
                number={3}
                width=".176in"
                removeBorderLeft={index !== 0}
              />
            </View>
          ))}
        </View>
      </Row>

      <Row
        style={{
          justifyContent: "space-between",
          marginRight: ".1in",
          paddingLeft: ".25in",
          paddingRight: ".1in",
          ...styles.text,
        }}
      >
        <View>
          <Text>
            <Text style={{ color: "#f00" }}>c.</Text> AOG in weeks
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: ".04in",
          }}
        >
          {Array.from(Array(11).keys()).map((item) => (
            <View
              key={item}
              style={{
                height: ".17in",
                borderWidth: 1,
                width: ".415in",
                marginLeft: ".12in",
              }}
            ></View>
          ))}
        </View>
      </Row>

      <Row
        style={{
          marginBottom: ".1in",
          paddingLeft: ".25in",
          paddingRight: ".1in",
          ...styles.text,
        }}
      >
        <View>
          <Text>
            <Text style={{ color: "#f00" }}>d.</Text> Weight & Vital signs:
          </Text>
        </View>
      </Row>
      <Column
        style={{
          marginLeft: ".1in",
          marginRight: ".1in",
          paddingLeft: ".25in",
          paddingRight: ".1in",
          ...styles.text,
        }}
      >
        {[
          " Weight",
          " Cardiac Rate",
          " Respiratory Rate",
          " Blood Pressure",
          " Temperature",
        ].map((item, index) => (
          <Row key={item} style={{ justifyContent: "space-between" }}>
            <View style={{ fontSize: "7.8px" }}>
              <Text>
                <Text style={{ color: "#f00" }}>d. {index + 1}.</Text>
                {item}
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: ".07in",
              }}
            >
              {Array.from(Array(11).keys()).map((item) => (
                <View
                  key={item}
                  style={{
                    height: ".17in",
                    borderWidth: 1,
                    width: ".415in",
                    marginLeft: ".12in",
                  }}
                ></View>
              ))}
            </View>
          </Row>
        ))}
      </Column>
    </>
  );
};
