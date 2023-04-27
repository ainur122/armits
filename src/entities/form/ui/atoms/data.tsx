import { DatePicker, Form } from 'antd';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { convertToString } from 'shared/lib/utilities';
import { DefaultErrors, DefaultPlaceHolders } from '../../texts';
import { IFormItemBaseProps } from '../types';

dayjs.extend(utc);

export const Date = <T,>(props: IFormItemBaseProps<T>) => {
  return (
    <>
      <Form.Item
        name={convertToString(props.name)}
        rules={[
          {
            required: props.required,
            message: DefaultErrors.required,
          },
        ]}
      >
        <DatePicker
          className='w-full'
          placeholder={props.placeholder || DefaultPlaceHolders.date}
          name={convertToString(props.name)}
          format='DD-MM-YYYY'
          inputReadOnly
          allowClear={!props.required}
        />
      </Form.Item>
    </>
  );
};
