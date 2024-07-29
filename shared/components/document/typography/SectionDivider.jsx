import { Text, View } from "@react-pdf/renderer";
import React from "react";

function SectionDivider({ text, description, flexDirection = "row" }) {
  return (
    <View
      style={{
        backgroundColor: "black",
        color: "white",
        fontFamily: "Source Sans",
        fontWeight: "bold",
        fontSize: 11,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        width: "100%",
        flexDirection: flexDirection,
        paddingTop: "0.05in",
        paddingBottom: "0.04in",
      }}
    >
      <Text>{text}</Text>
      {description ? (
        <Text
          style={{
            fontFamily: "Source Sans",
            fontWeight: "light",
            fontSize: 8.64,
            marginLeft: "0.12in",
            alignSelf: flexDirection === "row" ? "flex-end" : "center",
            bottom: 1,
            letterSpacing: -0.35,
          }}
        >
          {description}
        </Text>
      ) : (
        <></>
      )}
    </View>
  );
}

export default SectionDivider;
