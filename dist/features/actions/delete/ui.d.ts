import { IActionBase } from '../index';
import { IDeletePayload } from './model';
interface IProps extends IActionBase {
    payload: IDeletePayload;
    uid: string;
    successCallback: (uid: string) => void;
}
export declare const Delete: (props: IProps) => JSX.Element;
export {};
