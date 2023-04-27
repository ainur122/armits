import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export const Item = (props: IProps) => {
  return (
    <div className='w-[calc(100%_-_2px)] rounded-md border-solid border border-green-600 bg-green-50 border-b-0 rounded-b-none'>
      <div className='p-1 flex gap-x-5'>{props.children}</div>
    </div>
  );
};
