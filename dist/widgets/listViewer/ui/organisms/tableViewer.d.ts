import { TableViewerColumn } from 'entities/table';
import { TToolbarActionsList } from 'features/actions';
import { CancelablePromise } from 'restApi/core/CancelablePromise';
import { ETableTypes } from '../molecules/tableContainer';
export type TableViewerProps = {
    loader: () => CancelablePromise<unknown[]>;
    columns: TableViewerColumn<object>[];
    toolbarActions?: TToolbarActionsList;
    uidKeyPath: string;
    type: ETableTypes;
};
export declare const TableViewer: (props: TableViewerProps) => JSX.Element;
