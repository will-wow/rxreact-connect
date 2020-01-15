import { Subject } from "rxjs";

import { watchSignal } from "../test/signals";
import { getAccessor } from "./getAccessor";

describe("getAccessor", () => {
  it("creates an accessor from a prop", async () => {
    const subject$ = new Subject<string>();

    const [value$, setValue$] = getAccessor(subject$);

    const watchedValue$ = watchSignal(value$);

    await expect(watchedValue$).not.toEmit();

    subject$.next("from outside");
    await expect(watchedValue$).toEmitValue("from outside");

    setValue$.next("from inside");
    await expect(watchedValue$).toEmitValue("from inside");

    subject$.next("from outside again");
    await expect(watchedValue$).toEmitValue("from outside again");
  });
});
