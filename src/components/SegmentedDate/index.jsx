import { StyleSheet, Text } from "@react-pdf/renderer";
import React from "react";

import SegmentedLineInput from "../SegmentedLineInput";
import Dash from "../Dash";
import Row from "../../../shared/components/document/ClaimForm/layout/Row";
import Column from "../../../shared/components/document/ClaimForm/layout/Column";

const styles = StyleSheet.create({
  label: {
    alignSelf: "center",
    // fontFamily: "Arial Narrow",
    // fontStyle: "italic",
  },
});

const SegmentedDate = ({
  label,
  dateMarginLeft = ".10in",
  style,
  boxWidth = ".15in",
  debug,
  innerHeight = ".08in",
  outerHeight = ".18in",
  fontSize = "8.04px",
  inputSpace = ".04in",
  labelMarginTop,
  leftLabelStyle = { fontFamily: "Arial Narrow" },
  fieldLabelStyle,
  dateLabel = ["Month", "Day", "Year"],
  dateFieldContainerStyle,
  dashMarginTop,
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
    {label ? <Text style={leftLabelStyle}>{label}</Text> : <></>}
    <Column
      style={[
        dateFieldContainerStyle,
        {
          marginLeft: dateMarginLeft,
          marginRight: inputSpace,
        },
      ]}
    >
      <SegmentedLineInput
        number={2}
        width={boxWidth}
        innerHeight={innerHeight}
        outerHeight={outerHeight}
      />
      <Text
        style={[
          styles.label,
          { fontSize: fontSize, marginTop: labelMarginTop },
          fieldLabelStyle,
        ]}
      >
        {dateLabel[0]}
      </Text>
    </Column>
    <Dash height={outerHeight} marginTop={dashMarginTop} />
    <Column
      style={[
        dateFieldContainerStyle,
        {
          marginLeft: inputSpace,
          marginRight: inputSpace,
        },
      ]}
    >
      <SegmentedLineInput
        number={2}
        width={boxWidth}
        innerHeight={innerHeight}
        outerHeight={outerHeight}
      />
      <Text
        style={[
          styles.label,
          { fontSize: fontSize, marginTop: labelMarginTop },
          fieldLabelStyle,
        ]}
      >
        {dateLabel[1]}
      </Text>
    </Column>
    <Dash height={outerHeight} marginTop={dashMarginTop} />
    <Column
      style={[
        dateFieldContainerStyle,
        {
          marginLeft: inputSpace,
          marginRight: inputSpace,
        },
      ]}
    >
      <SegmentedLineInput
        number={4}
        width={boxWidth}
        innerHeight={innerHeight}
        outerHeight={outerHeight}
      />
      <Text
        style={[
          styles.label,
          { fontSize: fontSize, marginTop: labelMarginTop },
          fieldLabelStyle,
        ]}
      >
        {dateLabel[2]}
      </Text>
    </Column>
  </Row>
);

export default SegmentedDate;
