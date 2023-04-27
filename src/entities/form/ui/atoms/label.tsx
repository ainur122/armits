import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export const Label = (props: IProps) => {
  return (
    <>
      <span className='inline-block'>{props.children}</span>
    </>
  );
};
