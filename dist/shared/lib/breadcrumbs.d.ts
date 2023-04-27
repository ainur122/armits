export interface IBreadcrumbItem {
    path: string;
    title: string;
}
export declare const loadBreadcrumbsEvent: import("effector").Event<IBreadcrumbItem[]>;
export declare const pageBreadcrumbs$: import("effector").Store<IBreadcrumbItem[]>;
