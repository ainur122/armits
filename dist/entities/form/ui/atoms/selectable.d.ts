import { BaseOptionType } from 'rc-select/lib/Select';
import { IFormItemBaseProps } from '../types';
interface IProps<T, S> extends IFormItemBaseProps<T> {
    options: BaseOptionType[];
    loading?: boolean;
    showSearch?: boolean;
}
export declare const Selectable: <T, S>(props: IProps<T, S>) => JSX.Element;
export {};
