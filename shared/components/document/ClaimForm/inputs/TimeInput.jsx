import { StyleSheet, Text } from "@react-pdf/renderer";
import React from "react";
import Column from "../layout/Column";
import Row from "../layout/Row";
import SegmentedLineInput from "../../../../../src/components/SegmentedLineInput";

const styles = StyleSheet.create({
  label: {
    alignSelf: "center",
    fontFamily: "Source Sans",
    fontWeight: "light",
  },
});

const TimeInput = ({
  label,
  leftLabelStyle,
  hourMarginLeft = ".10in",
  style,
  debug,
  boxWidth = ".17in",
  innerHeight = ".06in",
  outerHeight = ".06in",
  fieldLabelStyle,
  timeFieldContainerStyle,
}) => (
  <Row
    style={[
      {
        paddingTop: 15,
      },
      style,
    ]}
    debug={debug}
  >
    {label ? (
      <Text
        style={[
          leftLabelStyle,
          { fontFamily: "Source Sans", fontWeight: "light" },
        ]}
      >
        {label}
      </Text>
    ) : (
      <></>
    )}
    <Column style={[timeFieldContainerStyle, { marginLeft: hourMarginLeft }]}>
      <SegmentedLineInput
        number={2}
        width={boxWidth}
        innerHeight={innerHeight}
        outerHeight={outerHeight}
      />
      <Text style={[styles.label, fieldLabelStyle]}>hour</Text>
    </Column>
    <Text
      style={{
        fontSize: 7,
        marginHorizontal: 2,
        bottom: -1,
        textAlign: "center",
      }}
    >
      :
    </Text>
    <Column style={timeFieldContainerStyle}>
      <SegmentedLineInput
        number={2}
        width={boxWidth}
        innerHeight={innerHeight}
        outerHeight={outerHeight}
      />
      <Text style={[styles.label, fieldLabelStyle]}>min</Text>
    </Column>
  </Row>
);

export default TimeInput;
