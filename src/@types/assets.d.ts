declare module '*.svg' {
    const content: any;
    export default content;
    export { ReactComponent };
}

declare module '*.png' {
    const content: any;
    export default content;
}

declare module '*.jpg' {
    const content: any;
    export default content;
}

declare module '*.scss' {
    const classNames: Record<string, string>;
    export default classNames;
}

declare module '*.module.scss' {
    const classes: Record<string, string>;
    export default classes;
}