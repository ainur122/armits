import { ColumnsType } from 'antd/lib/table';
import { TableViewerColumn, TableViewerItem, TTestColumn } from 'entities/table';

// это нужно чтобы проверять есть ли свойство {dataIndex} у объекта T
export const getColumns = <T extends object>(columns: TTestColumn<T>[]): TableViewerColumn<T>[] => {
  return columns as TableViewerColumn<T>[];
};

export const getSortableColumns = (items: TableViewerColumn<object>[]): ColumnsType<TableViewerItem> => {
  items.map((i) => {
    i.sorter = (a: any, b: any) => {
      const keyIndex = i.dataIndex as string;
      const aValue = a[keyIndex];
      const bValue = b[keyIndex];
      if (!aValue || !bValue) {
        return 0;
      }
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else if (typeof aValue === 'number' && typeof bValue === 'number') {
        return aValue - bValue;
      } else {
        // throw new Error('Невозможно отсортировать элемент');
      }
    };
    return i;
  });
  return items as ColumnsType<TableViewerItem>;
};
