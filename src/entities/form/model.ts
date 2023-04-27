import { FormInstance } from 'antd/es/form/hooks/useForm';
import { createEffect, createEvent, createStore, sample } from 'effector';
import { throttle } from 'patronum';

type TChangeValue = {
  value: unknown;
  name: string;
};

export const valueChanged = createEvent<TChangeValue>();

export const fromSubmitted = createEvent();
export const fieldsChanged = createEvent<unknown[]>();
export const formLastChangedField$ = createStore(null);

export const entityRequested = createEvent<string>();
export const resetInitialValue = createEvent<null>();

export const allFieldsLoaded = createEvent<unknown[]>();
export const initialValue$ = createStore(null);

export const formFields$ = createStore(null);

export const getObjectEf = createEffect<string, unknown, Error>();
export const adapterEf = createEffect<unknown, unknown, Error>();
export const submitFormEf = createEffect();
export const setValueEf = createEffect<TChangeValue, void, Error>();

sample({
  clock: valueChanged,
  target: setValueEf,
});

const throttledFormChanges = throttle({
  source: fieldsChanged,
  timeout: 200,
});

sample({
  clock: throttledFormChanges,
  target: formLastChangedField$,
});

sample({
  clock: allFieldsLoaded,
  target: formFields$,
});

sample({
  clock: getObjectEf.doneData,
  target: adapterEf,
});

sample({
  clock: adapterEf.doneData,
  target: [initialValue$],
});

sample({
  clock: entityRequested,
  target: getObjectEf,
});

sample({
  clock: resetInitialValue,
  target: initialValue$,
});
