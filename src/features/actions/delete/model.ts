import { createEffect, createEvent, createStore, sample } from 'effector';
import { CancelablePromise } from 'restApi/core/CancelablePromise';
import notificationUtils from 'shared/lib/notificationUtils';

export interface IDeletePayload {
  // any тут обязателен т.к. такая модель приходит из свагера
  deleteFx: (guid: string) => CancelablePromise<any>;
  objectPath: string;
}

export const buttonClicked = createEvent();
export const itemSelected = createEvent<string>();

export const itemId$ = createStore<string>(null);

sample({
  clock: itemSelected,
  target: itemId$,
});

export const deleteEf = createEffect<string, undefined, Error>();
export const successEf = createEffect<string, unknown, Error>();
export const showSuccessNotifyEf = createEffect<unknown, unknown, Error>(() => {
  notificationUtils.Success('Успешно удалено!');
});
export const errorEf = createEffect<unknown, unknown, Error>(() => {
  notificationUtils.Error('Ошибка удаления');
});

sample({
  clock: buttonClicked,
  source: itemId$,
  target: deleteEf,
});

sample({
  clock: deleteEf.doneData,
  source: itemId$,
  target: [successEf, showSuccessNotifyEf],
});

sample({
  clock: deleteEf.failData,
  target: errorEf,
});
