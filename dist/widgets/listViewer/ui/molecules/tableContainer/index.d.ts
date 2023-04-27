import { TableViewerColumn } from 'entities/table';
export declare enum ETableTypes {
    GENERAL = 0,
    SELECTABLE = 1,
    NESTED = 2
}
interface IProps {
    columns: TableViewerColumn<object>[];
    type: ETableTypes;
}
declare const TableContainer: (props: IProps) => JSX.Element;
export default TableContainer;
