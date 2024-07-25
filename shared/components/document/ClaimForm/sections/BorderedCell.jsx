import { View } from "@react-pdf/renderer";
import React from "react";

const BorderedCell = ({ children, style, disableRightBorder }) => (
  <View
    style={[
      {
        margin: 0,
        borderRightWidth: disableRightBorder ? 0 : 1,
        borderColor: "black",
        fontFamily: "Source Sans",
        fontWeight: 400,
        fontSize: 11.52,
        paddingHorizontal: 3,
        textAlign: "center",
        width: "100%",
        height: "100%",
      },
      style,
    ]}
  >
    {children}
  </View>
);

export default BorderedCell;
