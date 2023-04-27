import { ColumnsType } from 'antd/lib/table';
import { TableViewerItem } from '../types';
interface IProps {
    items: TableViewerItem[];
    columns: ColumnsType<object>;
    loading: boolean;
}
export declare const Selectable: (props: IProps) => JSX.Element;
export {};
