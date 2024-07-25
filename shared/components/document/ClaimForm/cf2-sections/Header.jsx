import React from "react";
import Row from "../layout/Row";
import Column from "../layout/Column";
import PhilHealthHeaderPart from "../document-parts/PhilHealthHeader";
import { Image, Text, View } from "@react-pdf/renderer";
import BoxInput from "../inputs/BoxInput";
import BoldText from "../../typography/BoldText";
import { styles } from "../forms/ClaimForm2";
import PhilHealthLogo from "../logo/philhealth_logo.png";

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
            <Text>This form may be reproduced and</Text>
            <Text>is NOT FOR SALE</Text>
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
                fontFamily: "Source Sans",
                alignSelf: "center",
                top: "0.25in",
              }}
            >
              CF-2
            </Text>
            <Text style={{ fontFamily: "Source Sans" }}>(Claim Form 2)</Text>
            <Text>Revised September 2018</Text>
          </Column>
          <Column
            style={{
              marginTop: "0.05in",
            }}
          >
            <View
              style={{
                right: 0,
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
              <BoxInput number={10} />
            </View>
          </Column>
        </Column>
      </Row>
      <Column style={styles.bottom_header}>
        <BoldText>IMPORTANT REMINDERS:</BoldText>
        <Row>
          <Text>PLEASE WRITE IN CAPITAL </Text>
          <BoldText>LETTERS </BoldText>
          <Text>AND </Text>
          <BoldText>CHECK </BoldText>
          <Text>THE APPROPRIATE BOXES.</Text>
        </Row>

        <Text>
          This form together with other supporting documents should be filed
          within sixty (60) calendar days from date of discharge.
        </Text>
        <Text>
          All information, fields and trick boxes required in this form are
          necessary. Claim forms with incomplete information
        </Text>
        <BoldText>
          FALSE/INCORRECT INFORMATION OR MISREPRESENTATION SHALL BE SUBJECT TO
          CRIMINAL, CIVIL OR ADMINISTRATIVE LIABILITIES.
        </BoldText>
      </Column>
    </>
  );
};
