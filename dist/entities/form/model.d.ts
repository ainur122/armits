type TChangeValue = {
    value: unknown;
    name: string;
};
export declare const valueChanged: import("effector").Event<TChangeValue>;
export declare const fromSubmitted: import("effector").Event<void>;
export declare const fieldsChanged: import("effector").Event<unknown[]>;
export declare const formLastChangedField$: import("effector").Store<any>;
export declare const entityRequested: import("effector").Event<string>;
export declare const resetInitialValue: import("effector").Event<null>;
export declare const allFieldsLoaded: import("effector").Event<unknown[]>;
export declare const initialValue$: import("effector").Store<any>;
export declare const formFields$: import("effector").Store<any>;
export declare const getObjectEf: import("effector").Effect<string, unknown, Error>;
export declare const adapterEf: import("effector").Effect<unknown, unknown, Error>;
export declare const submitFormEf: import("effector").Effect<unknown, unknown, Error>;
export declare const setValueEf: import("effector").Effect<TChangeValue, void, Error>;
export {};
