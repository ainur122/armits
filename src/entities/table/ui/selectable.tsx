import { Table, TablePaginationConfig } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { useEvent, useStore } from 'effector-react';
import { elementSelected, paginationSize$ } from '../model';
import { getPaginationSetting } from '../pagination';
import { TableViewerItem } from '../types';
import styles from './styles.scss';

interface IProps {
  items: TableViewerItem[];
  columns: ColumnsType<object>;
  loading: boolean;
}

export const Selectable = (props: IProps) => {
  const handlerSelectElement = useEvent(elementSelected);
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: TableViewerItem[]) => {
      handlerSelectElement(selectedRows[0]);
    },
  };
  const size = useStore(paginationSize$);
  const paginationConfig: TablePaginationConfig = getPaginationSetting();

  return (
    <Table
      bordered
      className={styles['table-viewer']}
      columns={props.columns as ColumnsType<TableViewerItem>}
      size='small'
      dataSource={props.items}
      pagination={{ pageSize: size, ...paginationConfig }}
      showSorterTooltip={false}
      sticky={true}
      locale={{ emptyText: 'Нет данных' }}
      loading={props.loading}
      rowSelection={{
        type: 'radio',
        ...rowSelection,
      }}
    ></Table>
  );
};
