import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export const Container = (props: IProps) => {
  return (
    <div className='w-[calc(100%_-_2px)] rounded-md border-solid border border-green-600 bg-green-50 mb-2'>
      <div className='p-1 flex gap-x-5'>{props.children}</div>
    </div>
  );
};
