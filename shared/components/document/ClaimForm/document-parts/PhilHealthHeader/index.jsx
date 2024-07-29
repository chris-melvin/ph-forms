import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";

import BoldText from "../../../typography/BoldText";
import Column from "../../layout/Column";
import Row from "../../layout/Row";

const headerStyles = StyleSheet.create({
  minion_regular: {
    fontFamily: "Minion Pro",
    fontSize: "8px",
  },
});

function PhilHealthHeaderPart({ style }) {
  return (
    <Column
      style={{
        textAlign: "center",
        alignItems: "center",
        height: "100%",
        ...style,
      }}
    >
      <Text
        style={[
          { fontFamily: "Minion Pro", fontStyle: "italic", fontSize: "8px" },
        ]}
      >
        Republic of the Philippines
      </Text>
      <BoldText
        fontFamily="Minion Pro"
        fontSize="12px"
        style={{ letterSpacing: 0.5 }}
      >
        PHILIPPINE HEALTH INSURANCE CORPORATION
      </BoldText>
      <Text style={[headerStyles.minion_regular]}>
        Citystate Centre 709 Shaw Boulevard, Pasig City
      </Text>
      <Row>
        <Text style={[headerStyles.minion_regular]}>
          Call Center (02) 441-7442
        </Text>
        <View
          style={{
            width: "0.20in",
            justifyContent: "center",
          }}
        >
          <BoldText
            style={{
              alignSelf: "center",
              position: "absolute",
              paddingBottom: "0.05in",
              fontSize: 16,
            }}
          >
            ·
          </BoldText>
        </View>

        <Text style={[headerStyles.minion_regular]}>
          Trunkline (02) 441-7444
        </Text>
      </Row>

      <Text style={[headerStyles.minion_regular]}>www.philhealth.gov.ph</Text>
      <Text style={[headerStyles.minion_regular]}>
        email: actioncenter@philhealth.gov.ph
      </Text>
    </Column>
  );
}

export default PhilHealthHeaderPart;
