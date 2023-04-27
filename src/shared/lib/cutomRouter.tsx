import { useLayoutEffect, useState } from 'react';
import { Router } from 'react-router-dom';

interface ICustomRouter {
  history: any;
  [key: string]: any;
}

const CustomRouter = ({ history, ...props }: ICustomRouter) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <>
      <Router {...props} location={state.location} navigationType={state.action} navigator={history} />{' '}
    </>
  );
};

export default CustomRouter;
