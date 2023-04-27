import { ColumnType } from 'antd/es/table';
export type TableViewerColumn<T extends object> = ColumnType<T> & object;
export type TableViewerItem = object & {
    key: string;
};
export type NestedTableViewerItem = object & TableViewerItem & {
    childrens: [];
};
export type TTestColumn<T extends object> = ColumnType<T> & {
    dataIndex: keyof T;
    disableSort?: boolean;
};
