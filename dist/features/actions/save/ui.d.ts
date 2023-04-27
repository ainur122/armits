import { IActionBase } from '../index';
import { ISavePayload } from './model';
interface IProps extends IActionBase {
    payload: ISavePayload;
}
export declare const Save: (props: IProps) => JSX.Element;
export {};
