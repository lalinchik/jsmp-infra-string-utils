export function modify(str, modifier) {
    if(modifier === 'upper') {
        return str.toUpperCase();
    } else if (modifier === 'capital') {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
    } else {
        return str;
    }
}