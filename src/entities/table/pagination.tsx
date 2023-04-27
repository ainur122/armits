import { TablePaginationConfig } from 'antd';
import { pageSizeChanged } from './model';

export const defaultPageSize = 50;

export const getPaginationSetting = (): TablePaginationConfig => {
  return {
    showSizeChanger: true,
    pageSizeOptions: ['20', '50', '100', '200'],
    onShowSizeChange: (current, size) => pageSizeChanged(size),
    showTotal: (total, range: [number, number]) => `${range[0]}-${range[1]} из ${total} записей`,
  };
};
