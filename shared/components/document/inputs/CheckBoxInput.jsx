import { StyleSheet, Text, View } from "@react-pdf/renderer";

import BoxInput from "./BoxInput";
import Row from "../ClaimForm/layout/Row";

const styles = StyleSheet.create({
  // label: {
  //   textAlign: "center",
  //   paddingTop: 2,
  //   flexWrap: "nowrap",
  //   overflow: "visible",
  // },
  smallSquare: {
    // minWidth: 14,
    width: ".11in",
    height: ".15in",
    alignSelf: "center",
    marginRight: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#000",
  },
  square: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#00000",
  },
  smLabel: {
    alignSelf: "center",
    marginRight: 8,
    fontFamily: "Arial Narrow",
    fontSize: 8,
  },
});

const CheckBoxInput = ({
  children,
  label,
  style,
  isSmall = false,
  customSquareSize,
  boxMarginRight,
  customWidth = ".16in",
  customHeight = ".18in",
  debug,
  marginBottom = 2,
  labelStyle = {
    textAlign: "center",
    paddingTop: 2,
    flexWrap: "nowrap",
    overflow: "visible",
    marginLeft: ".05in",
  },
}) => (
  <Row
    style={{
      ...(isSmall ? { maxHeight: 14 } : { marginBottom: marginBottom }),
      ...style,
    }}
    debug={debug}
  >
    {isSmall ? (
      <>
        <View
          style={[
            styles.smallSquare,
            { minWidth: customSquareSize, height: customSquareSize },
          ]}
        />
        {label && <Text style={styles.smLabel}>{label}</Text>}
        {children}
      </>
    ) : (
      <>
        <View
          style={[
            styles.square,

            {
              minWidth: customWidth,
              height: customHeight,
              marginRight: boxMarginRight,
            },
          ]}
        />
        {label && <Text style={[labelStyle]}>{label}</Text>}
        {children}
      </>
    )}
  </Row>
);

export default CheckBoxInput;
