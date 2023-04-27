import { ColumnsType } from 'antd/lib/table';
import { TableViewerColumn, TableViewerItem, TTestColumn } from 'entities/table';
export declare const getColumns: <T extends object>(columns: TTestColumn<T>[]) => TableViewerColumn<T>[];
export declare const getSortableColumns: (items: TableViewerColumn<object>[]) => ColumnsType<TableViewerItem>;
