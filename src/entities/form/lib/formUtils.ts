import { Rule } from 'antd/es/form';

const FormUtils = {
  required: (fieldDescription: string): Rule => {
    return {
      required: true,
      message: `${fieldDescription} обязательно`,
    };
  },
};

export default FormUtils;
