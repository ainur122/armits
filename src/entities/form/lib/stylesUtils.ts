export const getBorderClasses = (index: number, cols: '2' | '3'): string => {
  const isSecondItemInRow = index % 2 === 1 && cols === '2';
  const isSecondOrThirdItemInRow = (index === 1 || index % 3 === 1) && cols === '3';
  const isFirstItemInRow = index % 3 === 0 && cols === '3';

  const borderLeft = isSecondItemInRow || isSecondOrThirdItemInRow ? 'pl-3 ' : '';
  const borderRight = isFirstItemInRow || (index % 2 === 0 && cols === '2') ? '' : 'pr-3 ';

  return `${borderLeft} ${borderRight}`;
};
