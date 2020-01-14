import React, { useState } from 'react'

export function createSignalGraphProvider<T, Parent>(
  Context: React.Context<T>,
  createSignalGraph: (signals?: Parent) => T
): React.FunctionComponent {
  return function SignalGraphProvider({ children }) {
    const [signals] = useState(() => createSignalGraph())
    return <Context.Provider value={signals}>{children}</Context.Provider>
  }
}
