export const concatenateClasseName = (className1: string, className2?: string) => {
    let className = className1;
    if (className2) {
        className += ` ${className2}`;
    }
    return className;
}