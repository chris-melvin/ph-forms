import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";
import Row from "../ClaimForm/layout/Row";
import Column from "../ClaimForm/layout/Column";

const styles = StyleSheet.create({
  container: {
    textAlign: "left",
  },
  upperText: {
    borderBottomWidth: 0.5,
    borderColor: "#000",
    padding: "0.03in",
    width: "100%",
  },
  lowerText: {
    paddingTop: "0.07in",
    textAlign: "center",
    width: "100%",
  },
  borderedContainer: {
    borderColor: "#000",
    borderWidth: 0.5,
  },
  borderedLowerText: {
    textAlign: "left",
    height: "0.25in",
  },
  borderedUpperText: {
    textAlign: "left",
    height: "0.25in",
  },
});

function StackedBoxInput({
  label,
  upperText,
  lowerText,
  style = {},
  debug,
  boxWidth,
  boxHeight,
  isBordered,
  labelStyle,
  lowerTextFontSize,
}) {
  return (
    <Row style={{ ...style }} debug={debug}>
      <Text style={labelStyle}>{label}</Text>
      <Column
        style={{
          ...styles.container,
          width: boxWidth,
          height: boxHeight,
          ...(isBordered ? styles.borderedContainer : {}),
        }}
      >
        <View
          style={{
            ...styles.upperText,
            ...(isBordered ? styles.borderedUpperText : {}),
          }}
        >
          <Text>{upperText}</Text>
        </View>
        <View
          style={{
            ...styles.lowerText,
            ...(isBordered ? styles.borderedLowerText : {}),
          }}
        >
          <Text
            style={{ fontSize: lowerTextFontSize, fontFamily: "Arial Narrow" }}
          >
            {lowerText}
          </Text>
        </View>
      </Column>
    </Row>
  );
}

export default StackedBoxInput;
