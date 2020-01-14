import { Observable } from 'rxjs'
import { map, distinctUntilChanged } from 'rxjs/operators'
import isEqual from 'lodash.isequal'

export function getProp<Props, T extends keyof Props>(prop: T) {
  return function(props$: Observable<Props>): Observable<Props[T]> {
    return props$.pipe(
      map(props => props[prop]),
      distinctUntilChanged((a, b) => isEqual(a, b))
    )
  }
}
