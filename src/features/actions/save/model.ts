import { createEffect, createEvent, sample } from 'effector';
import { CancelablePromise } from 'restApi/core/CancelablePromise';
import notificationUtils from 'shared/lib/notificationUtils';

type TUpdateEntityPayload = { uid: string; requestBody: unknown };
export type TCreateAction = (saveObj: unknown) => CancelablePromise<unknown>;
export type TUpdateAction = (uid: string, requestBody: unknown) => CancelablePromise<unknown>;

export interface ISavePayload {
  uid?: string;
  action: TUpdateAction | TCreateAction;
  successCallback: (object: unknown) => unknown;
}

type TPayload = unknown | TUpdateEntityPayload;

export const buttonClicked = createEvent();
export const saveObjectLoaded = createEvent<{ saveObj: unknown }>();

export const saveObjectEf = createEffect<TPayload, unknown, Error>();
export const successEf = createEffect<unknown, unknown, Error>();
const errorEf = createEffect<unknown, unknown, Error>((saveObj) => {
  notificationUtils.Error('uid' in (saveObj as object) ? 'Ошибка редактирования' : 'Ошибка создания');
});
sample({
  clock: saveObjectLoaded,
  target: saveObjectEf,
});

sample({
  clock: saveObjectEf.doneData,
  target: successEf,
});

sample({
  clock: saveObjectEf.failData,
  source: saveObjectLoaded,
  target: errorEf,
});
