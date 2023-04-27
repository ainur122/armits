import { Table, TablePaginationConfig } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { useStore } from 'effector-react';
import { paginationSize$ } from '../model';
import { getPaginationSetting } from '../pagination';
import { TableViewerItem } from '../types';
import styles from './styles.scss';

interface IProps {
  items: TableViewerItem[];
  columns: ColumnsType<TableViewerItem>;
  loading: boolean;
}

export const General = (props: IProps) => {
  const size = useStore(paginationSize$);
  const paginationConfig: TablePaginationConfig = getPaginationSetting();
  return (
    <Table
      bordered
      className={styles['table-viewer']}
      columns={props.columns}
      pagination={{ pageSize: size, ...paginationConfig }}
      size='small'
      dataSource={props.items}
      showSorterTooltip={false}
      sticky={true}
      locale={{ emptyText: 'Нет данных' }}
      loading={props.loading}
    ></Table>
  );
};
