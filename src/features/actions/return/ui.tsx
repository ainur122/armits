import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import { useEvent } from 'effector-react';
import { useEffect } from 'react';
import { IActionBase } from '../index';
import { buttonClicked, IReturnPayload, payloadLoaded } from './model';

interface IProps extends IActionBase {
  payload: IReturnPayload;
}
export const Return = (props: IProps) => {
  const handlerButtonClick = useEvent(buttonClicked);
  const handlerPayloadLoad = useEvent(payloadLoaded);

  useEffect(() => {
    handlerPayloadLoad(props.payload);
  }, [props]);

  return (
    <Tooltip title='Назад' placement='bottom'>
      <Button icon={<ArrowLeftOutlined />} onClick={handlerButtonClick} size='small' disabled={props.disabled} />
    </Tooltip>
  );
};
