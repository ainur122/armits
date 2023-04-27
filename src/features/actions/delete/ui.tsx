import { DeleteOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import { useEvent, useStore } from 'effector-react';
import { useEffect } from 'react';
import { IActionBase } from '../index';
import { buttonClicked, deleteEf, IDeletePayload, itemSelected, successEf } from './model';

interface IProps extends IActionBase {
  payload: IDeletePayload;
  uid: string;
  successCallback: (uid: string) => void;
}

export const Delete = (props: IProps) => {
  const handlerButtonClick = useEvent(buttonClicked);
  const handlerItem = useEvent(itemSelected);
  const loading = useStore(deleteEf.pending);
  useEffect(() => {
    deleteEf.use(props.payload.deleteFx);
    successEf.use(props.successCallback);
  }, [props.payload]);

  useEffect(() => {
    handlerItem(props.uid);
  }, [props.uid]);

  return (
    <Tooltip title='Удалить' placement='bottom'>
      <Button
        icon={<DeleteOutlined />}
        onClick={handlerButtonClick}
        size='small'
        disabled={props.disabled || loading}
      />
    </Tooltip>
  );
};
