import { IActionBase } from '../index';
import { IReturnPayload } from './model';
interface IProps extends IActionBase {
    payload: IReturnPayload;
}
export declare const Return: (props: IProps) => JSX.Element;
export {};
