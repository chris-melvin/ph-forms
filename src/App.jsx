import { useState } from "react";

import { PDFViewer } from "@react-pdf/renderer";

import CF3 from "./components/cf3";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ width: "100vw", overflowY: "hidden" }}>
      <PDFViewer width="100%" height={900}>
        <CF3 />
      </PDFViewer>
    </div>
  );
}

export default App;
