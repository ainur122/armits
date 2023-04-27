import { TToolbarActionsList } from 'features/actions';
import { ReactNode } from 'react';
import { CancelablePromise } from 'restApi/core/CancelablePromise';
import './../../model';
type IProps = {
    toolbarActions?: TToolbarActionsList;
    getObject?: {
        loader: (uid: string) => CancelablePromise<unknown>;
        uid: string;
        adapter: (originObj: unknown) => unknown;
    };
    children?: ReactNode;
};
declare const FormViewer: (props: IProps) => JSX.Element;
export default FormViewer;
