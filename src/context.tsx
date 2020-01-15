import * as React from "react";

export function createSignalGraphContext<T>(
  createSignalGraph: () => T
): [React.Context<T>, React.FunctionComponent] {
  const signalGraph = createSignalGraph();
  const SignalGraphContext = React.createContext(signalGraph);

  const SignalGraphProvider: React.FunctionComponent = ({ children }) => {
    return (
      <SignalGraphContext.Provider value={signalGraph}>{children}</SignalGraphContext.Provider>
    );
  };

  return [SignalGraphContext, SignalGraphProvider];
}
