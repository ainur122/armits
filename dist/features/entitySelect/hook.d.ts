import { EDictionaryKeys } from 'entities/dictionaries/list';
import { TFilterFunction } from './ui';
interface IUseDictionaryOptionsProps<T> {
    dictionaryKey: EDictionaryKeys;
    bindValue: (o: any) => unknown;
    bindLabel: (o: any) => unknown;
    filterOptions?: TFilterFunction;
}
export declare const useDictionaryOptions: <T>(props: IUseDictionaryOptionsProps<T>) => {
    selectOptions: {
        label: unknown;
        value: unknown;
    }[];
    originList: unknown[];
};
export {};
