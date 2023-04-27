import React from 'react';

interface IProps {
  title: string;
  link?: string;
}

export const Title = (props: IProps) => {
  return <span className='text-blue-400 cursor-pointer'>{props.title}</span>;
};
