import { createEvent, createStore, sample } from 'effector';

export interface IBreadcrumbItem {
  path: string;
  title: string;
}

export const loadBreadcrumbsEvent = createEvent<IBreadcrumbItem[]>();

export const pageBreadcrumbs$ = createStore<IBreadcrumbItem[]>(null);

sample({
  clock: loadBreadcrumbsEvent,
  target: pageBreadcrumbs$,
});
