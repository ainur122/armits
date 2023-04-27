import { Form, Input } from 'antd';
import { convertToString } from 'shared/lib/utilities';
import { DefaultErrors } from '../../texts';
import { IFormItemBaseProps } from '../types';

export const Text = <T,>(props: IFormItemBaseProps<T>) => {
  return (
    <>
      <Form.Item
        name={convertToString(props.name)}
        rules={[{ required: props.required, message: DefaultErrors.required }]}
      >
        <Input placeholder={props.placeholder} name={convertToString(props.name)} />
      </Form.Item>
    </>
  );
};
