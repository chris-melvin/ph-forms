import { StyleSheet, Text } from "@react-pdf/renderer";
import React from "react";

import SegmentedLineInput from "../SegmentedLineInput";
import Dash from "../Dash";
import Row from "../../../shared/components/document/ClaimForm/layout/Row";
import Column from "../../../shared/components/document/ClaimForm/layout/Column";

const styles = StyleSheet.create({
  label: {
    alignSelf: "center",
    fontFamily: "Arial Narrow",
    fontStyle: "italic",
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
      <Text style={{ fontFamily: "Arial Narrow" }}>{label}</Text>
    ) : (
      <></>
    )}
    <Column
      style={{
        marginLeft: dateMarginLeft,
        marginRight: inputSpace,
      }}
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
        ]}
      >
        Month
      </Text>
    </Column>
    <Dash height={outerHeight} />
    <Column
      style={{
        marginLeft: inputSpace,
        marginRight: inputSpace,
      }}
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
        ]}
      >
        Day
      </Text>
    </Column>
    <Dash height={outerHeight} />
    <Column
      style={{
        marginLeft: inputSpace,
        marginRight: inputSpace,
      }}
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
        ]}
      >
        Year
      </Text>
    </Column>
  </Row>
);

export default SegmentedDate;
