import { useStore } from 'effector-react';
import { elementRemoved } from 'entities/items';
import { selectedElement$ } from 'entities/table/model';
import { Add, Delete, EToolbarActions, Reload, TListItem, TToolbarActionsList } from 'features/actions';
import { IAddPayload } from 'features/actions/add/model';
import { IDeletePayload } from 'features/actions/delete/model';
import { ReactNode } from 'react';
import { getGuidFromPath } from 'shared/lib/utilities';

interface IProps {
  actions: TToolbarActionsList;
}

const Actions = (props: IProps) => {
  const selectedElement = useStore(selectedElement$);

  const showAction = (i: TListItem): ReactNode => {
    switch (i.type) {
      case EToolbarActions.ADD:
        return <Add key='add' payload={i.payload as IAddPayload} disabled={i.disabled} />;

      case EToolbarActions.DELETE:
        return (
          <Delete
            successCallback={(uid: string) => {
              elementRemoved(uid);
            }}
            key='delete'
            uid={getGuidFromPath(selectedElement, i.payload.objectPath)}
            payload={i.payload as IDeletePayload}
            disabled={!selectedElement || i.disabled}
          />
        );
      case EToolbarActions.RELOAD:
        return <Reload className='ml-auto' key='reload' />;
      default:
        console.warn(`Unknown action type: ${i.type}`);
        return null;
    }
  };

  return <>{props.actions?.map(showAction)}</>;
};
export default Actions;
