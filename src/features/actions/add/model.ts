import { createEffect, createEvent, sample } from 'effector';
import { navigateTo } from 'shared/lib/routerLink';

export interface IAddPayload {
  link: string;
}

const navigate = (payload: IAddPayload) => {
  navigateTo(payload.link);
};

export const buttonClicked = createEvent();
export const payloadLoaded = createEvent<IAddPayload>();
export const navigateEx = createEffect(navigate);

sample({
  clock: buttonClicked,
  source: payloadLoaded,
  target: navigateEx,
});
