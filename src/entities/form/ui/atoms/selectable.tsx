import { Form, Select } from 'antd';
import { BaseOptionType } from 'rc-select/lib/Select';
import { useEffect, useRef, useState } from 'react';
import { convertToString } from 'shared/lib/utilities';
import { valueChanged } from '../../model';
import { DefaultErrors } from '../../texts';
import { IFormItemBaseProps } from '../types';

interface IProps<T, S> extends IFormItemBaseProps<T> {
  options: BaseOptionType[];
  loading?: boolean;
  showSearch?: boolean;
}
export const Selectable = <T, S>(props: IProps<T, S>) => {
  const [selectedValue, setSelectedValue] = useState<unknown>(null);

  const ref = useRef();

  useEffect(() => {
    if (props.options && !props.options.map((i) => i.value).includes(selectedValue)) {
      valueChanged({ name: convertToString(props.name), value: null });
    }
  }, [selectedValue]);

  const handleChange = (value: unknown) => {
    setSelectedValue(value);
  };
  return (
    <>
      <Form.Item
        name={convertToString(props.name)}
        rules={[{ required: props.required, message: DefaultErrors.required }]}
      >
        <Select
          ref={ref}
          value={selectedValue}
          onChange={handleChange}
          allowClear
          disabled={props.disabled}
          filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
          showSearch={props.showSearch}
          loading={props.loading}
          options={props.options}
        />
      </Form.Item>
    </>
  );
};
