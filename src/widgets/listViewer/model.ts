import { createEvent, createStore, sample } from 'effector';
import { items$ } from 'entities/items';
import { TableViewerItem } from 'entities/table';
import { addUniqueKeyToChildrens } from 'shared/lib/utilities';

export const tableItems$ = createStore<TableViewerItem[]>(null);
export const storeReset = createEvent<null>();
sample({
  clock: [items$],
  source: items$,
  fn: (res) => {
    return res.map((i: object) => addUniqueKeyToChildrens(i));
  },
  target: tableItems$,
});

sample({
  clock: storeReset,
  target: tableItems$,
});
