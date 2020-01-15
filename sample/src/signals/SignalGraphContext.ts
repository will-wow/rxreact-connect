import { createSignalGraphContext } from "../../../src/context";
import { signalGraph } from "./SignalGraph";

export const [SignalGraphContext, SignalGraphProvider] = createSignalGraphContext(signalGraph);
