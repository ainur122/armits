import { ReloadOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import { useEvent, useStore } from 'effector-react';
import { loadItemsEf } from 'entities/items';
import { buttonClicked } from './model';

interface IProps {
  className?: string;
}

export const Reload = (props: IProps) => {
  const handlerButtonClick = useEvent(buttonClicked);
  const loading = useStore(loadItemsEf.pending);
  return (
    <Tooltip className={props.className} title='Обновить'>
      <Button icon={<ReloadOutlined />} onClick={handlerButtonClick} size='small' disabled={loading} />
    </Tooltip>
  );
};
