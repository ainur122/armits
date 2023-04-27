import { useEvent, useStore } from 'effector-react';
import { adapterEf, entityRequested, getObjectEf, initialValue$ } from 'entities/form';
import { FormContainer } from 'entities/form/ui/molecules/formContainer';
import { Toolbar } from 'entities/toolbar';
import { TToolbarActionsList } from 'features/actions';
import { ReactNode, useEffect } from 'react';
import { CancelablePromise } from 'restApi/core/CancelablePromise';
import Actions from '../molecules/actions';

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

const FormViewer = (props: IProps) => {
  const initValue = useStore(initialValue$);
  const getEntity = useEvent(entityRequested);
  useEffect(() => {
    if (props.getObject) {
      getObjectEf.use(props.getObject.loader);
      adapterEf.use(props.getObject.adapter);
      getEntity(props.getObject.uid);
    }
  }, [props.getObject]);

  return (
    <>
      <div>
        <Toolbar.Container>
          <Actions actions={props.toolbarActions} />
        </Toolbar.Container>
      </div>
      <div className='flex flex-col'>
        {(!props.getObject || (props.getObject && initValue)) && <FormContainer>{props.children}</FormContainer>}
      </div>
    </>
  );
};

export default FormViewer;
