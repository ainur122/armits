import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Space, Table, TablePaginationConfig } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { useEvent, useStore } from 'effector-react';
import React from 'react';
import { elementSelected, paginationSize$ } from '../model';
import { getPaginationSetting } from '../pagination';
import { NestedTableViewerItem, TableViewerItem } from '../types';
import styles from './styles.scss';

interface IProps {
  items: TableViewerItem[];
  columns: ColumnsType<object>;
  loading: boolean;
}

export const Nested = (props: IProps) => {
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
      columns={props.columns as ColumnsType<NestedTableViewerItem>}
      size='small'
      sticky
      pagination={{ pageSize: size, ...paginationConfig }}
      dataSource={props.items as NestedTableViewerItem[]}
      locale={{ emptyText: 'Нет данных' }}
      showSorterTooltip={false}
      loading={props.loading}
      expandable={{
        childrenColumnName: 'childrens',
        expandIcon: ({ expanded, onExpand, record }) => {
          if (!record.childrens || record.childrens.length === 0) {
            return <Space />;
          }
          return expanded ? (
            <div className='inline-block mr-4 cursor-pointer' onClick={(e) => onExpand(record, e)}>
              <MinusCircleOutlined />
            </div>
          ) : (
            <div className='inline-block mr-4 cursor-pointer' onClick={(e) => onExpand(record, e)}>
              <PlusCircleOutlined />
            </div>
          );
        },
      }}
      rowSelection={{
        type: 'radio',
        ...rowSelection,
      }}
    />
  );
};
