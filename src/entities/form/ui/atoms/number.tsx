import { Form, InputNumber } from 'antd';
import { convertToString } from 'shared/lib/utilities';
import { DefaultErrors } from '../../texts';
import { IFormItemBaseProps } from '../types';

export interface IProps<T> extends IFormItemBaseProps<T> {
  min?: number;
  max?: number;
}

export const Number = <T,>(props: IProps<T>) => {
  return (
    <>
      <Form.Item
        name={convertToString(props.name)}
        rules={[{ required: props.required, message: DefaultErrors.required }]}
      >
        <InputNumber
          className='w-full'
          min={props.min}
          max={props.max}
          placeholder={props.placeholder}
          name={convertToString(props.name)}
        />
      </Form.Item>
    </>
  );
};
