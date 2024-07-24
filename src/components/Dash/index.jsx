import { Text, View } from "@react-pdf/renderer";
import React from "react";

function Dash({ width = ".08in" }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: ".16in",
      }}
    >
      <View
        style={{
          borderBottom: 0.7,
          borderColor: "black",
          width: width,
          height: 0,
          backgroundColor: "red",
        }}
      ></View>
    </View>
  );
}

export default Dash;
