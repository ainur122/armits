import { notification } from 'antd';
import { ArgsProps } from 'antd/es/notification/interface';

const notificationUtils = {
  GetDefaultNotify: (message: string): ArgsProps => {
    return { message: message, placement: 'bottomRight' };
  },

  Success: (message: string) => {
    notification.success(notificationUtils.GetDefaultNotify(message));
  },
  Error: (message: string) => {
    notification.error(notificationUtils.GetDefaultNotify(message));
  },
};

export default notificationUtils;
