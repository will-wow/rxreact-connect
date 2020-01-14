import { Observable, Subject, merge } from 'rxjs'

export const getAccessor = <T>(externalValue$: Observable<T>): [Observable<T>, Subject<T>] => {
  const setValue$ = new Subject<T>()
  const value$ = merge(setValue$, externalValue$)

  return [value$, setValue$]
}
