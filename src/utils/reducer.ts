import { uniqWith } from 'lodash'
import { Observable, merge } from 'rxjs'
import { map, scan, shareReplay } from 'rxjs/operators'

type ObservableReducer<T, List> = [Observable<T>, (state: List, value: T) => List]

export function reducer<List, O1>(
  pairs: [ObservableReducer<O1, List>],
  startWith: List
): Observable<List>

export function reducer<List, O1, O2>(
  pairs: [ObservableReducer<O1, List>, ObservableReducer<O2, List>],
  startWith: List
): Observable<List>

export function reducer<List, O1, O2, O3>(
  pairs: [ObservableReducer<O1, List>, ObservableReducer<O2, List>, ObservableReducer<O3, List>],
  startWith: List
): Observable<List>

export function reducer<List, O1, O2, O3, O4>(
  pairs: [
    ObservableReducer<O1, List>,
    ObservableReducer<O2, List>,
    ObservableReducer<O3, List>,
    ObservableReducer<O4, List>
  ],
  startWith: List
): Observable<List>

export function reducer<List, O1, O2, O3, O4, O5>(
  pairs: [
    ObservableReducer<O1, List>,
    ObservableReducer<O2, List>,
    ObservableReducer<O3, List>,
    ObservableReducer<O4, List>,
    ObservableReducer<O5, List>
  ],
  startWith: List
): Observable<List>

export function reducer<List, O1, O2, O3, O4, O5, O6>(
  pairs: [
    ObservableReducer<O1, List>,
    ObservableReducer<O2, List>,
    ObservableReducer<O3, List>,
    ObservableReducer<O4, List>,
    ObservableReducer<O5, List>,
    ObservableReducer<O6, List>
  ],
  startWith: List
): Observable<List>

export function reducer<List, O1, O2, O3, O4, O5, O6, O7>(
  pairs: [
    ObservableReducer<O1, List>,
    ObservableReducer<O2, List>,
    ObservableReducer<O3, List>,
    ObservableReducer<O4, List>,
    ObservableReducer<O5, List>,
    ObservableReducer<O6, List>,
    ObservableReducer<O7, List>
  ],
  startWith: List
): Observable<List>

export function reducer<List, O1, O2, O3, O4, O5, O6, O7, O8>(
  pairs: [
    ObservableReducer<O1, List>,
    ObservableReducer<O2, List>,
    ObservableReducer<O3, List>,
    ObservableReducer<O4, List>,
    ObservableReducer<O5, List>,
    ObservableReducer<O6, List>,
    ObservableReducer<O7, List>,
    ObservableReducer<O8, List>
  ],
  startWith: List
): Observable<List>

export function reducer<List, O1, O2, O3, O4, O5, O6, O7, O8, O9>(
  pairs: [
    ObservableReducer<O1, List>,
    ObservableReducer<O2, List>,
    ObservableReducer<O3, List>,
    ObservableReducer<O4, List>,
    ObservableReducer<O5, List>,
    ObservableReducer<O6, List>,
    ObservableReducer<O7, List>,
    ObservableReducer<O8, List>,
    ObservableReducer<O9, List>
  ],
  startWith: List
): Observable<List>

export function reducer<List, T>(
  pairs: ObservableReducer<T, List>[],
  startWith: List
): Observable<List> {
  const xs = pairs.map(([observable, _mapper], index) =>
    observable.pipe(map(value => ({ index, payload: value })))
  )

  return merge(...xs).pipe(
    scan((state, { index, payload }) => {
      const [, f] = pairs[index]
      return f(state, payload)
    }, startWith),
    shareReplay(1)
  )
}
