import { of } from 'rxjs'

import { reducer } from './reducer'

describe('reducer', () => {
  it('handles reducing some observables', async () => {
    const o1 = of(1)
    const o2 = of(2)

    const o3 = reducer(
      [
        [o1, (state, value) => state + value],
        [o2, (state, value) => state - value]
      ],
      0
    )
    const n3 = await o3.toPromise()

    expect(n3).toBe(-1)
  })
})
