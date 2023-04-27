import { EToolbarActions, TListItem, TToolbarActionsList } from 'features/actions';
import { Return } from 'features/actions/return';
import { IReturnPayload } from 'features/actions/return/model';
import { Save } from 'features/actions/save';
import { ISavePayload } from 'features/actions/save/model';
import { ReactNode } from 'react';

interface IProps {
  actions: TToolbarActionsList;
}

const Actions = (props: IProps) => {
  const showAction = (i: TListItem): ReactNode => {
    switch (i.type) {
      case EToolbarActions.RETURN:
        return <Return key='return' payload={i.payload as IReturnPayload} />;
      case EToolbarActions.SAVE:
        return <Save payload={i.payload as ISavePayload} disabled={i.disabled} key={EToolbarActions.SAVE} />;

      default:
        console.warn(`Unknown action type: ${i.type}`);
        return null;
    }
  };

  return <>{props.actions?.map(showAction)}</>;
};
export default Actions;
