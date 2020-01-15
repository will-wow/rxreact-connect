import { Subject } from "rxjs";
import { scan } from "rxjs/operators";

export type SignalGraph = ReturnType<typeof signalGraph>;

export const signalGraph = () => {
  const onClick$ = new Subject<void>();

  const clickCount$ = onClick$.pipe(scan(count => count + 1, 0));

  return {
    onClick$,
    clickCount$
  };
};
