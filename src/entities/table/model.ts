import { createEvent, createStore, sample } from 'effector';
import { TableViewerItem } from './types';

export const elementSelected = createEvent<TableViewerItem>();
export const elementUnselected = createEvent();

export const selectedElement$ = createStore<TableViewerItem>(null);

sample({
  clock: elementSelected,
  target: selectedElement$,
});

selectedElement$.on(elementUnselected, () => null);

export const paginationSize$ = createStore(50);
export const pageSizeChanged = createEvent<number>();

sample({
  clock: pageSizeChanged,
  target: paginationSize$,
});
