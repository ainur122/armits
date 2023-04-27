import { ReactElement } from 'react';
interface IProps {
    cols?: '2' | '3';
    children: ReactElement[];
}
export declare const Grid: (props: IProps) => JSX.Element;
export {};
