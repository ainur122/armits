import { Form } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useEvent, useStore } from 'effector-react';
import { ReactNode, useEffect } from 'react';

import {
  allFieldsLoaded,
  fieldsChanged,
  formFields$,
  fromSubmitted,
  initialValue$,
  resetInitialValue,
  setValueEf,
  submitFormEf,
} from '../../model';

type IProps = {
  children?: ReactNode;
};

export const FormContainer = (props: IProps) => {
  const onFieldsChange = useEvent(fieldsChanged);
  const onFinish = useEvent(fromSubmitted);

  const onAllFieldsLoaded = useEvent(allFieldsLoaded);

  const formFields = useStore(formFields$);
  const initValue = useStore(initialValue$);
  const [currentForm] = useForm();

  useEffect(() => {
    setValueEf.use(async ({ name, value }) => {
      return new Promise<void>((resolve) => {
        currentForm.setFieldsValue({ [name]: value });
        resolve();
      });
    });

    submitFormEf.use(() => {
      currentForm.submit();
    });

    return () => {
      resetInitialValue(null);
    };
  }, []);

  return (
    <>
      <Form
        onFieldsChange={(filed, allFields) => {
          onFieldsChange(filed);
          onAllFieldsLoaded(allFields);
        }}
        fields={formFields}
        form={currentForm}
        initialValues={initValue}
        onFinish={onFinish}
        autoComplete='off'
      >
        {props.children}
      </Form>
    </>
  );
};
