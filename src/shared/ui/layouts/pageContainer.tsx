import React from 'react';

export const PageContainer: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div className='flex flex-col h-full p-2'>{children}</div>
);
