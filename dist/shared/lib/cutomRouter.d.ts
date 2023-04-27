interface ICustomRouter {
    history: any;
    [key: string]: any;
}
declare const CustomRouter: ({ history, ...props }: ICustomRouter) => JSX.Element;
export default CustomRouter;
