import { createEvent, sample } from 'effector';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const navigateTo = createEvent<string>();

export const NavigationWrapper = () => {
  const navigate = useNavigate();

  useEffect(() => {
    sample({
      clock: navigateTo,
      fn: (res) => {
        navigate(res);
      },
    });
  }, []);

  return <></>;
};
