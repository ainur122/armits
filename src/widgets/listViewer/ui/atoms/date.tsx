import dayjs from 'dayjs';
import React from 'react';

interface IProps {
  stringDate: string;
  link?: string;
}

export const Date = (props: IProps) => {
  return <span>{dayjs(props.stringDate).format('DD-MM-YYYY')}</span>;
};
