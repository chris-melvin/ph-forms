import React from "react";
import Row from "../layout/Row";
import Column from "../layout/Column";
import PhilHealthHeaderPart from "../document-parts/PhilHealthHeader";
import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";
import BoxInput from "../inputs/BoxInput";
import BoldText from "../../typography/BoldText";
import { styles } from "../forms/ClaimForm2";
import PhilHealthLogo from "../logo/philhealth_logo.png";

const ComponentStyles = StyleSheet.create({
  text: {
    letterSpacing: 0.02,
  },
});
export const Header = () => {
  return (
    <>
      <Row style={styles.top_header}>
        <Column
          style={{
            height: "100%",
          }}
        >
          <Image style={styles.header_logo} src={PhilHealthLogo} />
        </Column>
        <PhilHealthHeaderPart
          style={{
            marginRight: "0.40in",
            marginTop: "0.35in",
          }}
        />
        <Column>
          <Column style={styles.header_right}>
            <Text
              style={{
                fontFamily: "Source Sans",
                fontWeight: "light",
                fontSize: "8px",
              }}
            >
              This form may be reproduced and
            </Text>
            <Text
              style={{
                fontFamily: "Source Sans",
                fontWeight: "light",
                fontSize: "8px",
              }}
            >
              is NOT FOR SALE
            </Text>
            <View
              style={{
                height: "0.50in",
                width: "100%",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></View>
            <Text
              style={{
                position: "absolute",
                fontSize: 38,
                fontWeight: "bold",
                fontFamily: "Source Sans",
                alignSelf: "center",
                top: "0.25in",
              }}
            >
              CF-2
            </Text>
            <Text
              style={{
                fontFamily: "Source Sans",
                fontWeight: "bold",
                fontSize: 10,
                marginTop: "0.05in",
              }}
            >
              (Claim Form 2)
            </Text>
            <Text style={styles.bodyText}>Revised September 2018</Text>
          </Column>
          <Column
            style={{
              marginTop: "0.05in",
            }}
          >
            <View
              style={{
                right: -10,
                position: "absolute",
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  paddingRight: 4.32,
                }}
              >
                Series #
              </Text>
              <BoxInput number={13} />
            </View>
          </Column>
        </Column>
      </Row>
      <Column style={styles.bottom_header}>
        <BoldText
          fontSize="9px"
          style={{ letterSpacing: 0.05, marginBottom: ".02in" }}
        >
          IMPORTANT REMINDERS:
        </BoldText>
        <Row style={[ComponentStyles.text]}>
          <Text>PLEASE WRITE IN CAPITAL </Text>
          <BoldText>LETTERS </BoldText>
          <Text>AND </Text>
          <BoldText>CHECK </BoldText>
          <Text>THE APPROPRIATE BOXES.</Text>
        </Row>

        <Text style={[ComponentStyles.text]}>
          This form together with other supporting documents should be filed
          within sixty (60) calendar days from date of discharge.
        </Text>
        <Text style={[ComponentStyles.text]}>
          All information, fields and trick boxes required in this form are
          necessary. Claim forms with incomplete information shall not be
          processed.
        </Text>
        <BoldText style={[ComponentStyles.text]}>
          FALSE/INCORRECT INFORMATION OR MISREPRESENTATION SHALL BE SUBJECT TO
          CRIMINAL, CIVIL OR ADMINISTRATIVE LIABILITIES.
        </BoldText>
      </Column>
    </>
  );
};
