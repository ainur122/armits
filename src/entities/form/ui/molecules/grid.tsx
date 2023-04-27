import { ReactElement, ReactNode } from 'react';

interface IProps {
  // todo jit у тейлвинда почему то не работает
  cols?: '2' | '3';
  children: ReactElement[];
}

export const Grid = (props: IProps) => {
  const className = `grid gap-4 divide-x divide-gray-200 ${props.cols === '3' ? 'grid-cols-3' : 'grid-cols-2'}`;

  const childrenWithBorder = props.children.map((child: ReactNode, index: number) => {
    return (
      <div key={index} className={'first:pl-0 pl-4'}>
        {child}
      </div>
    );
  });

  return (
    <>
      <div className={className}>{childrenWithBorder}</div>
    </>
  );
};
