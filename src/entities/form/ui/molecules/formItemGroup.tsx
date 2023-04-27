import React, { ReactElement } from 'react';
import { Label } from '../atoms';

interface CustomInputProps {
  children: ReactElement[];
}

export const FormItemGroup: React.FC<CustomInputProps> = ({ children }) => {
  const labelElement = children.find((child) => child.type === Label);
  const inputChild = children.find((child) => child.type !== Label);

  return (
    <>
      <div className='flex w-full gap-3'>
        <div className='w-1/3 mt-2'>{labelElement}</div>
        <div className='w-2/3'>{inputChild}</div>
      </div>
    </>
  );
};
