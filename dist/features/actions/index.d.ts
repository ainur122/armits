import { RequiredField } from 'shared/lib/typescript';
import { IAddPayload } from './add/model';
import { IDeletePayload } from './delete/model';
import { IReturnPayload } from './return/model';
import { ISavePayload } from './save/model';
export * from './add';
export * from './delete';
export * from './reload';
export * from './return';
export * from './save';
export type TActionsPayload = IAddPayload | IDeletePayload | IReturnPayload | ISavePayload;
export declare enum EToolbarActions {
    EDIT = 0,
    ADD = 1,
    DELETE = 2,
    DRAWER = 3,
    FILTERS = 4,
    RELOAD = 5,
    RETURN = 6,
    SAVE = 7
}
export interface IActionBase {
    disabled?: boolean;
}
export type TActionItem<T extends EToolbarActions> = T extends EToolbarActions.RETURN ? {
    type: T;
    disabled?: boolean;
    payload?: undefined;
} : T extends EToolbarActions.RELOAD ? {
    type: T;
    disabled?: boolean;
    payload?: undefined;
} : RequiredField<{
    type: T;
    disabled?: boolean;
    payload?: Extract<TActionsPayload, T extends EToolbarActions.ADD ? IAddPayload : T extends EToolbarActions.DELETE ? IDeletePayload : T extends EToolbarActions.SAVE ? ISavePayload : never>;
}, 'payload'>;
export type TListItem = {
    [K in EToolbarActions]: TActionItem<K>;
}[EToolbarActions];
export type TToolbarActionsList = Array<TListItem>;
