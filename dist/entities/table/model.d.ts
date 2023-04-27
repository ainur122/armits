import { TableViewerItem } from './types';
export declare const elementSelected: import("effector").Event<TableViewerItem>;
export declare const elementUnselected: import("effector").Event<void>;
export declare const selectedElement$: import("effector").Store<TableViewerItem>;
export declare const paginationSize$: import("effector").Store<number>;
export declare const pageSizeChanged: import("effector").Event<number>;
