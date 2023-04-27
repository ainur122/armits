import { useStore } from 'effector-react';
import { loadItemsEf } from 'entities/items';
import { Table, TableViewerColumn } from 'entities/table';
import { getSortableColumns } from '../../../lib/column';
import { tableItems$ } from '../../../model';

export enum ETableTypes {
  GENERAL,
  SELECTABLE,
  NESTED,
}

interface IProps {
  columns: TableViewerColumn<object>[];
  type: ETableTypes;
}

const TableContainer = (props: IProps) => {
  const tableItems = useStore(tableItems$);
  const isLoading = useStore(loadItemsEf.pending);
  return (
    <>
      {props.type === ETableTypes.GENERAL && (
        <Table.General items={tableItems} loading={isLoading} columns={getSortableColumns(props.columns)} />
      )}
      {props.type === ETableTypes.SELECTABLE && (
        <Table.Selectable items={tableItems} loading={isLoading} columns={props.columns} />
      )}
      {props.type === ETableTypes.NESTED && (
        <Table.Nested items={tableItems} loading={isLoading} columns={props.columns} />
      )}
    </>
  );
};

export default TableContainer;
