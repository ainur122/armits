export interface IReturnPayload {
    action?: () => void;
}
export declare const buttonClicked: import("effector").Event<void>;
export declare const payloadLoaded: import("effector").Event<IReturnPayload>;
export declare const clickEx: import("effector").Effect<IReturnPayload, void, Error>;
