import { createEvent, sample } from 'effector';
import { reloadStarted } from 'entities/items';

export const buttonClicked = createEvent();

sample({
  clock: buttonClicked,
  target: reloadStarted,
});
