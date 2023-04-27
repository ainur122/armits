import { IFormItemBaseProps } from '../types';
export interface IProps<T> extends IFormItemBaseProps<T> {
    min?: number;
    max?: number;
}
export declare const Number: <T>(props: IProps<T>) => JSX.Element;
