import { ColumnsType } from 'antd/lib/table';
import { TableViewerItem } from '../types';
interface IProps {
    items: TableViewerItem[];
    columns: ColumnsType<TableViewerItem>;
    loading: boolean;
}
export declare const General: (props: IProps) => JSX.Element;
export {};
