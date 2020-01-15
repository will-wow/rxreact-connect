import * as React from "react";
import { SignalGraphProvider } from "../signals/SignalGraphContext";
import ClickCounter from "./ClickCounter";

const App: React.FunctionComponent = () => {
  return (
    <SignalGraphProvider>
      <ClickCounter multiple={3} />
    </SignalGraphProvider>
  );
};

export default App;
