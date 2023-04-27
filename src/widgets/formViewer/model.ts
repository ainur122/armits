import { createStore, sample } from 'effector';
import { fromSubmitted, submitFormEf } from 'entities/form/model';
import { buttonClicked, saveObjectLoaded } from 'features/actions/save/model';
import { convertDayjsProperties } from 'shared/lib/utilities';

const store = createStore(null);

sample({
  clock: buttonClicked,
  fn: (res) => {
    return res;
  },
  target: submitFormEf,
});

sample({
  clock: fromSubmitted,
  fn: (data) => convertDayjsProperties(data),
  target: saveObjectLoaded,
});
