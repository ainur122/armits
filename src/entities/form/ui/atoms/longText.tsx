import { Form, Input } from 'antd';
import { convertToString } from 'shared/lib/utilities';
import { DefaultErrors } from '../../texts';
import { IFormItemBaseProps } from '../types';

interface IProps<T> extends IFormItemBaseProps<T> {
  rows?: number;
}

const { TextArea } = Input;

export const LongText = <T,>(props: IProps<T>) => {
  return (
    <>
      <Form.Item
        name={convertToString(props.name)}
        rules={[{ required: props.required, message: DefaultErrors.required }]}
      >
        <TextArea rows={props.rows || 2} placeholder={props.placeholder} name={convertToString(props.name)} />
      </Form.Item>
    </>
  );
};
