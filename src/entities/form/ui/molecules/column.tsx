import React, { ReactElement } from 'react';
import { Label } from '../atoms';

interface CustomInputProps {
  children: ReactElement[] | ReactElement;
}

export const Column: React.FC<CustomInputProps> = ({ children }) => {
  return (
    <>
      <div className='flex flex-col gap-3 items-baseline'>{children}</div>
    </>
  );
};
