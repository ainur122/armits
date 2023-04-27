import { SaveOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import { useEvent, useStore } from 'effector-react';
import { useEffect } from 'react';
import { IActionBase } from '../index';
import { buttonClicked, ISavePayload, saveObjectEf, successEf, TCreateAction, TUpdateAction } from './model';

interface IProps extends IActionBase {
  payload: ISavePayload;
}

export const Save = (props: IProps) => {
  const handlerButtonClick = useEvent(buttonClicked);
  const loading = useStore(saveObjectEf.pending);
  useEffect(() => {
    saveObjectEf.use(async (res) => {
      const { payload } = props;
      const { uid, action } = payload;

      if (uid) {
        const updateAction = action as TUpdateAction;
        return updateAction(uid, res);
      } else {
        const createAction = action as TCreateAction;
        return createAction(res);
      }
    });
    successEf.use(props.payload.successCallback);
  }, []);

  return (
    <Tooltip title='Сохранить' placement='bottom'>
      <Button icon={<SaveOutlined />} onClick={handlerButtonClick} size='small' disabled={props.disabled || loading} />
    </Tooltip>
  );
};
