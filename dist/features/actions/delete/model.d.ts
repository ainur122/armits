import { CancelablePromise } from 'restApi/core/CancelablePromise';
export interface IDeletePayload {
    deleteFx: (guid: string) => CancelablePromise<any>;
    objectPath: string;
}
export declare const buttonClicked: import("effector").Event<void>;
export declare const itemSelected: import("effector").Event<string>;
export declare const itemId$: import("effector").Store<string>;
export declare const deleteEf: import("effector").Effect<string, undefined, Error>;
export declare const successEf: import("effector").Effect<string, unknown, Error>;
export declare const showSuccessNotifyEf: import("effector").Effect<unknown, unknown, Error>;
export declare const errorEf: import("effector").Effect<unknown, unknown, Error>;
