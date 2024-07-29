import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";
import Column from "../layout/Column";

const styles = StyleSheet.create({
  inputField: {
    height: "0.14in",
    borderBottomWidth: 0.5,
    borderColor: "#000",
  },
  fieldLabel: {
    alignSelf: "center",
    textAlign: "center",
    fontFamily: "Source Sans",
  },
  descriptionText: {
    fontFamily: "Source Sans",
    letterSpacing: -0.5,
    fontSize: 7.68,
    alignSelf: "center",
  },
});

function FieldInput({
  label,
  description,
  style,
  width,
  debug,
  labelStyle,
  descriptionStyle,
}) {
  return (
    <Column debug={debug} style={[style]}>
      <View style={[styles.inputField, { width: width }]} />
      <Text style={[styles.fields, labelStyle]}>{label}</Text>
      {description ? (
        <Text style={[styles.descriptionText, descriptionStyle]}>
          {description}
        </Text>
      ) : (
        <></>
      )}
    </Column>
  );
}

export default FieldInput;
