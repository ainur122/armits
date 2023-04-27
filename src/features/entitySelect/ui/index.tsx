import { EDictionaryKeys } from 'entities/dictionaries/list';
import { dictionaryRequested } from 'entities/dictionaries/model';
import { Selectable } from 'entities/form';
import { useEffect } from 'react';
import { useDictionaryOptions } from '../hook';

export type TFilterFunction = (array: unknown[]) => unknown[];

interface IProps<T, S> {
  dictionaryKey: EDictionaryKeys;
  name: keyof T;
  bindValue: (o: S) => unknown;
  bindLabel: (o: S) => unknown;
  required?: boolean;
  showSearch?: boolean;
  filter?: {
    fromOrigin: boolean;
    fn: TFilterFunction;
  };
  disabled?: boolean;
}

export const SelectableEntity = <T, S>({
  dictionaryKey,
  name,
  bindValue,
  bindLabel,
  required,
  showSearch,
  filter,
  disabled,
}: IProps<T, S>) => {
  const options = useDictionaryOptions<S>({
    dictionaryKey,
    bindValue,
    bindLabel,
  });

  useEffect(() => {
    dictionaryRequested(dictionaryKey);
  }, [dictionaryKey, filter]);
  const filteredOptions =
    filter && filter.fn
      ? filter.fromOrigin
        ? filter.fn(options.originList)?.map((i: any) => ({
            label: bindLabel(i),
            value: bindValue(i),
          }))
        : filter.fn(options.selectOptions)
      : options.selectOptions;
  return (
    <Selectable<T, S>
      disabled={disabled}
      showSearch={showSearch}
      required={required}
      loading={!options?.selectOptions}
      options={filteredOptions}
      name={name}
    />
  );
};
