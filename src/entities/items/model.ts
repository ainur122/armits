import { createEffect, createEvent, createStore, sample } from 'effector';
import { elementUnselected } from '../table/model';

export const items$ = createStore([]);
export const $uidPath = createStore(null);

export const reloadStarted = createEvent<void>();
export const elementRemoved = createEvent<string>();
export const uidPathLoaded = createEvent<string>();
export const itemsRequested = createEvent<void>();

export const loadItemsEf = createEffect<void, any, Error>();
sample({
  clock: elementRemoved,
  source: [items$, $uidPath],
  fn: ([items, uidKeyPath], id) => items.filter((i: any) => i[uidKeyPath] !== id),
  target: items$,
});

sample({
  clock: elementRemoved,
  target: elementUnselected,
});

sample({
  clock: uidPathLoaded,
  target: $uidPath,
});

sample({
  clock: [itemsRequested, reloadStarted],
  target: [loadItemsEf],
});

sample({
  source: loadItemsEf.doneData,
  fn: (i) => {
    return i;
  },
  target: items$,
});
