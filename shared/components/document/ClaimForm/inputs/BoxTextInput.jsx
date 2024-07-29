import { StyleSheet, View } from "@react-pdf/renderer";
import React from "react";
import Column from "../layout/Column";
import Row from "../layout/Row";

const styles = StyleSheet.create({
  container: {
    borderColor: "#000",
    borderWidth: 1,

    textAlign: "left",
  },
  upperText: {
    padding: "0.03in",
  },
});

function BoxTextInput({ label, style, debug, boxWidth, children }) {
  return (
    <Row style={{ ...styles.container, ...style }} debug={debug}>
      <Column style={{ width: boxWidth }}>
        <View style={styles.upperText}>{children}</View>
      </Column>
    </Row>
  );
}

export default BoxTextInput;
