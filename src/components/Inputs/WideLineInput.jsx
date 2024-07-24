import { StyleSheet, View, Text } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  lineContainer: {
    width: "100%",
    display: "flex",
    marginTop: "auto",
    flexDirection: "row",
    alignItems: "stretch",
  },
  fieldContainer: {},
  fieldValue: {
    minHeight: "0.34in",
  },
  fieldLabel: {
    paddingVertical: 2,
    borderTopWidth: 1,
    borderColor: "black",
    fontSize: "8.04px",
  },
  noRightBorder: {
    borderRightWidth: 0,
  },
});

const WideLineInput = ({ fields, style, labelStyle }) => (
  <View style={[styles.lineContainer, style]}>
    {fields?.map((field, index) => (
      <View
        key={field.label + index}
        style={[styles.fieldContainer, { flex: field.size || 1 }]}
      >
        <Text style={styles.fieldValue}>{field?.value || " "}</Text>
        <Text
          style={[
            styles.fieldLabel,
            labelStyle,
            ...(index === fields.length - 1 ? [styles.noRightBorder] : []),
          ]}
        >
          {field?.label}
        </Text>
      </View>
    ))}
  </View>
);

export default WideLineInput;
