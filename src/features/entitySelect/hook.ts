import { useStoreMap } from 'effector-react';
import { EDictionaryKeys } from 'entities/dictionaries/list';
import { $dictionaries } from 'entities/dictionaries/model';
import { TFilterFunction } from './ui';

// todo надо расписать типы в виде дженериков начиная от компонентов
interface IUseDictionaryOptionsProps<T> {
  dictionaryKey: EDictionaryKeys;
  bindValue: (o: any) => unknown;
  bindLabel: (o: any) => unknown;
  filterOptions?: TFilterFunction;
}

export const useDictionaryOptions = <T>(props: IUseDictionaryOptionsProps<T>) => {
  return useStoreMap({
    store: $dictionaries,
    keys: [props.dictionaryKey],
    fn: (dictionaries) => {
      const dictionary = dictionaries.find(({ key }) => key === props.dictionaryKey);
      return {
        selectOptions:
          dictionary?.list.map((i) => ({
            label: props.bindLabel(i),
            value: props.bindValue(i),
          })) || null,
        originList: dictionary ? [...dictionary.list] : [],
      };
    },
  });
};
