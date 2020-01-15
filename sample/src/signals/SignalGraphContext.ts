import { createSignalGraphContext } from "@rxreact/connect";
import { signalGraph } from "./SignalGraph";

export const [SignalGraphContext, SignalGraphProvider] = createSignalGraphContext(signalGraph);
