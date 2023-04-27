import { IFormItemBaseProps } from '../types';
interface IProps<T> extends IFormItemBaseProps<T> {
    rows?: number;
}
export declare const LongText: <T>(props: IProps<T>) => JSX.Element;
export {};
