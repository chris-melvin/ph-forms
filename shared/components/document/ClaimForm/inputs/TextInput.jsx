import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";
import Row from "../layout/Row";

const styles = StyleSheet.create({
  fieldContainer: {
    marginRight: 10,
  },
  inputField: {
    height: "100%",
    borderBottomWidth: 0.5,
    borderColor: "#000",
  },
  fieldLabel: {
    alignSelf: "center",
    textAlign: "center",
    fontFamily: "Source Sans",
    fontWeight: 400,
    fontSize: 11.52,
    marginRight: 3,
  },
  descriptionText: {
    fontFamily: "Source Sans",
    fontWeight: 400,
    fontSize: 9,
    letterSpacing: -0.5,
    alignSelf: "center",
  },
});

function TextInput({
  label,
  description,
  style,
  lineStyle,
  width = 20,
  debug,
}) {
  return (
    <Row debug={debug} style={[styles.fieldContainer, style]}>
      {label && <Text style={styles.fieldLabel}>{label}</Text>}
      <View style={[styles.inputField, { width: width }, lineStyle]} />
    </Row>
  );
}

export default TextInput;
