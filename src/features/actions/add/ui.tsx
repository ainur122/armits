import { PlusOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import { useEvent } from 'effector-react';
import { useEffect } from 'react';
import { IActionBase } from '../index';
import { buttonClicked, IAddPayload, payloadLoaded } from './model';

interface IProps extends IActionBase {
  payload: IAddPayload;
}
// todo возможно имеет смысл сделать универсальную фичу типа link
export const Add = (props: IProps) => {
  const handlerButtonClick = useEvent(buttonClicked);
  const handlerPayloadLoad = useEvent(payloadLoaded);
  useEffect(() => {
    handlerPayloadLoad(props.payload);
  }, [props]);

  return (
    <Tooltip title='Создать' placement='bottom'>
      <Button icon={<PlusOutlined />} onClick={handlerButtonClick} size='small' disabled={props.disabled} />
    </Tooltip>
  );
};
