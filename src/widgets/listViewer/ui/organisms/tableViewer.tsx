import { useEvent, useStore } from 'effector-react';
import { itemsRequested, loadItemsEf, uidPathLoaded } from 'entities/items';
import { TableViewerColumn } from 'entities/table';
import { elementUnselected } from 'entities/table/model';
import { Toolbar } from 'entities/toolbar';
import { TToolbarActionsList } from 'features/actions';

import { useEffect, useRef } from 'react';
import { CancelablePromise } from 'restApi/core/CancelablePromise';
import { storeReset } from '../../model';
import Actions from '../molecules/actions';
import TableContainer, { ETableTypes } from '../molecules/tableContainer';

export type TableViewerProps = {
  loader: () => CancelablePromise<unknown[]>;
  columns: TableViewerColumn<object>[];
  toolbarActions?: TToolbarActionsList;
  uidKeyPath: string;
  type: ETableTypes;
};

export const TableViewer = (props: TableViewerProps) => {
  const tableRef = useRef();
  const itemsStoreReset = useEvent(storeReset);
  const unselectElement = useEvent(elementUnselected);
  useEffect(() => {
    uidPathLoaded(props.uidKeyPath);
    loadItemsEf.use(props.loader);
    itemsRequested();

    return () => {
      unselectElement();
      itemsStoreReset(null);
    };
  }, [props.loader]);

  return (
    <div className='flex flex-col flex-grow'>
      <div className='relative flex flex-col flex-grow overflow-auto' ref={tableRef}>
        <div className='absolute flex flex-col w-full'>
          <Toolbar.Container>
            <Actions actions={props.toolbarActions} />
          </Toolbar.Container>
          <TableContainer type={props.type} columns={props.columns} />
        </div>
      </div>
    </div>
  );
};
