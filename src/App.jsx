import { useState } from "react";

import { PDFViewer } from "@react-pdf/renderer";

import CF3 from "./components/cf3";
import ClaimForm1 from "../shared/components/document/ClaimForm/forms/ClaimForm1";
import CF2 from "../shared/components/document/ClaimForm/forms/ClaimForm2";
import ClaimForm4 from "../shared/components/document/ClaimForm/forms/ClaimForm4";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ width: "100vw", overflowY: "hidden" }}>
      <PDFViewer width="100%" height={900}>
        {/* <CF3 /> */}
        {/* <CF2 /> */}
        {/* <ClaimForm1 /> */}
        <ClaimForm4 />
      </PDFViewer>
    </div>
  );
}

export default App;
