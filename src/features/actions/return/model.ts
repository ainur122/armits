import { createEffect, createEvent, sample } from 'effector';
import { browserHistory } from 'shared/lib/browserHistory';

export interface IReturnPayload {
  action?: () => void;
}

const action = (payload: IReturnPayload) => {
  if (payload?.action) {
    payload.action();
  } else {
    browserHistory.back();
  }
};

export const buttonClicked = createEvent();
export const payloadLoaded = createEvent<IReturnPayload>();
export const clickEx = createEffect(action);

sample({
  clock: buttonClicked,
  source: payloadLoaded,
  target: clickEx,
});
