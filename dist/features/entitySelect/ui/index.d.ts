import { EDictionaryKeys } from 'entities/dictionaries/list';
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
export declare const SelectableEntity: <T, S>({ dictionaryKey, name, bindValue, bindLabel, required, showSearch, filter, disabled, }: IProps<T, S>) => JSX.Element;
export {};
