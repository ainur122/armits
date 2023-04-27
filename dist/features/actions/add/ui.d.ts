import { IActionBase } from '../index';
import { IAddPayload } from './model';
interface IProps extends IActionBase {
    payload: IAddPayload;
}
export declare const Add: (props: IProps) => JSX.Element;
export {};
