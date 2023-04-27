import { ArgsProps } from 'antd/es/notification/interface';
declare const notificationUtils: {
    GetDefaultNotify: (message: string) => ArgsProps;
    Success: (message: string) => void;
    Error: (message: string) => void;
};
export default notificationUtils;
