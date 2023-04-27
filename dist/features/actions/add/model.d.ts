export interface IAddPayload {
    link: string;
}
export declare const buttonClicked: import("effector").Event<void>;
export declare const payloadLoaded: import("effector").Event<IAddPayload>;
export declare const navigateEx: import("effector").Effect<IAddPayload, void, Error>;
