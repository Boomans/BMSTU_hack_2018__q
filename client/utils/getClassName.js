export default function getClassName(type, _styles) {
    if (!type) {
        return '';
    }
    const args = type.split(' ');
    const styles = Object.assign({}, _styles, {
        'undefined': '',
        '': ''
    });

    return args.reduce((res, curr) => {
        res += `${styles[curr]} `;
        return res;
    }, '');
}