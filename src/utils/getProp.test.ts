import { of } from "rxjs";

import "../test/signals";
import { getProp } from "./getProp";

describe("operators", () => {
  describe("getProp", () => {
    it("pulls a property from an observable of an object", async () => {
      const o$ = of({ foo: "bar" });
      const foo$ = o$.pipe(getProp("foo"));

      await expect(foo$).toEmitValue("bar");
    });
  });
});
