import { Observable } from "rxjs";
import { map, distinctUntilChanged } from "rxjs/operators";

/**
 * An operator to extract a property from an observable of an object.
 * Useful for pulling a specific prop from an observable of React props.
 * @param prop - The name of the object property
 * @returns - An observable of the object's property
 */
export function getProp<Props, T extends keyof Props>(prop: T) {
  return function(
    props$: Observable<Props>,
    compare?: (oldValue: Props[T], newValue: Props[T]) => boolean
  ): Observable<Props[T]> {
    return props$.pipe(
      map(props => props[prop]),
      distinctUntilChanged(compare)
    );
  };
}
