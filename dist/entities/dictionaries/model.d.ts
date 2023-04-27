import { EDictionaryKeys } from './list';
export interface IDictionariesItem {
    key: string;
    list: unknown[];
}
export declare const $dictionaries: import("effector").Store<IDictionariesItem[]>;
export declare const dictionaryLoaded: import("effector").Event<IDictionariesItem>;
export declare const dictionaryRequested: import("effector").Event<EDictionaryKeys>;
export declare const loadDictionaryFx: import("effector").Effect<EDictionaryKeys, unknown[], Error>;
