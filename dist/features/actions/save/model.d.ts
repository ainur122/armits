import { CancelablePromise } from 'restApi/core/CancelablePromise';
export type TCreateAction = (saveObj: unknown) => CancelablePromise<unknown>;
export type TUpdateAction = (uid: string, requestBody: unknown) => CancelablePromise<unknown>;
export interface ISavePayload {
    uid?: string;
    action: TUpdateAction | TCreateAction;
    successCallback: (object: unknown) => unknown;
}
export declare const buttonClicked: import("effector").Event<void>;
export declare const saveObjectLoaded: import("effector").Event<{
    saveObj: unknown;
}>;
export declare const saveObjectEf: import("effector").Effect<unknown, unknown, Error>;
export declare const successEf: import("effector").Effect<unknown, unknown, Error>;
