import Column from '../layout/Column';
import FieldInput from './FieldInput';

function StackedLines({ numLines = 1, lineWidth = '1in', style, debug }) {
  return (
    <Column style={style} debug={debug}>
      {Array.from({ length: numLines }, (_, index) => (
        <FieldInput
          key={index}
          width={lineWidth}
          style={{
            height: '0.17in',
          }}
        />
      ))}
    </Column>
  );
}

export default StackedLines;
