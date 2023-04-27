import { createBrowserHistory } from 'history';

export const browserHistory = createBrowserHistory();

const getDomain = () => {
  const urlString = location.origin;
  const url = new URL(urlString);
  return url.origin;
};

const createHrefWithBasename = (pathname: string) => {
  return browserHistory.createHref({ pathname: `${getDomain()}${pathname}` });
};

export const navigateTo = (path: string): void => {
  browserHistory.push(createHrefWithBasename(path));
};
