import { StyleSheet, Text, View } from "@react-pdf/renderer";
import Row from "../layout/Row";
import BoxInput from "./BoxInput";

const styles = StyleSheet.create({
  label: {
    textAlign: "center",
    fontFamily: "Source Sans",
    fontSize: 11.52,
    fontWeight: 400,
    paddingTop: 2,
    flexWrap: "nowrap",
    overflow: "visible",
  },
  square: {
    minWidth: 18,
    height: 18,
    marginRight: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#000',
  },
  smLabel: {
    alignSelf: 'center',
    fontFamily: 'Source Sans',
  },
});

const CheckBoxInput = ({ children, label, style, isSmall = false, boxMarginRight = '0.05in' }) => (
  <Row
    style={{
      ...(isSmall ? { maxHeight: 14 } : { marginRight: 5, marginBottom: 3 }),
      ...style,
    }}
  >
    {isSmall
      ? (
          <>
            <BoxInput number={1} style={{ marginRight: boxMarginRight }} />
            <Text style={[styles.smLabel]}>{label}</Text>
          </>
        )
      : (
        <>
          <View style={styles.square} />
          {label && <Text style={styles.label}>{label}</Text>}
          {children}
        </>
        )}
  </Row>
);

export default CheckBoxInput;
