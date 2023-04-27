import { createEffect, createEvent, createStore, sample } from 'effector';
import { dictionariesLoaderList, EDictionaryKeys } from './list';

export interface IDictionariesItem {
  key: string;
  list: unknown[];
}

export const $dictionaries = createStore<IDictionariesItem[]>([]);

export const dictionaryLoaded = createEvent<IDictionariesItem>();
export const dictionaryRequested = createEvent<EDictionaryKeys>();

sample({
  clock: dictionaryLoaded,
  source: $dictionaries,
  fn: (dictionaries: IDictionariesItem[], dictionary: IDictionariesItem) => [...dictionaries, dictionary],
  target: $dictionaries,
});

export const loadDictionaryFx = createEffect<EDictionaryKeys, unknown[]>(async (key) => {
  const loader = dictionariesLoaderList[key];
  if (loader) {
    return await loader();
  }
  throw new Error(`Loader not found for key ${key}`);
});

sample({
  clock: loadDictionaryFx.done,
  fn: ({ params, result }) => {
    return { key: params, list: result };
  },
  target: dictionaryLoaded,
});

interface ICheckLoaded {
  type: string;
  key?: EDictionaryKeys;
  data?: IDictionariesItem;
}
const dictionaryRequestedOrLoaded = createEvent<ICheckLoaded>();

sample({
  clock: dictionaryRequested,
  source: $dictionaries,
  fn: (dictionaries: IDictionariesItem[], key: EDictionaryKeys) => {
    const dictionary: IDictionariesItem = dictionaries.find((item) => item.key === key);
    if (dictionary) {
      return { type: 'loaded', data: dictionary };
    }
    return { type: 'request', key };
  },
  target: dictionaryRequestedOrLoaded,
});

sample({
  clock: dictionaryRequestedOrLoaded,
  filter: (i: ICheckLoaded) => i.type === 'request',
  fn: (i: ICheckLoaded) => i.key,
  target: loadDictionaryFx,
});

sample({
  clock: dictionaryRequestedOrLoaded,
  filter: (i: ICheckLoaded) => i.type === 'loaded',
  fn: (i: ICheckLoaded) => i.data,
  target: dictionaryLoaded,
});
