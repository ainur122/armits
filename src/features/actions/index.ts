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
export enum EToolbarActions {
  EDIT,
  ADD,
  DELETE,
  DRAWER,
  FILTERS,
  RELOAD,
  RETURN,
  SAVE,
}
export interface IActionBase {
  disabled?: boolean;
}

// если тип RETURN то поле payload не обязательно, для остальных услучаев для каждого type предусмотрен свой набор свойств описанные в соотвествующих интерфейсах
export type TActionItem<T extends EToolbarActions> = T extends EToolbarActions.RETURN
  ? {
      type: T;
      disabled?: boolean;
      payload?: undefined;
    }
  : T extends EToolbarActions.RELOAD
  ? {
      type: T;
      disabled?: boolean;
      payload?: undefined;
    }
  : RequiredField<
      {
        type: T;
        disabled?: boolean;
        payload?: Extract<
          TActionsPayload,
          T extends EToolbarActions.ADD
            ? IAddPayload
            : T extends EToolbarActions.DELETE
            ? IDeletePayload
            : T extends EToolbarActions.SAVE
            ? ISavePayload
            : never
        >;
      },
      'payload'
    >;

export type TListItem = {
  [K in EToolbarActions]: TActionItem<K>;
}[EToolbarActions];

export type TToolbarActionsList = Array<TListItem>;
