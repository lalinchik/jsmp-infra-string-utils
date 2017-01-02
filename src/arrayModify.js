import {modify} from './modify';

export function arrayModify(arr, modifier) {
    return arr.map(elem => modify(elem, modifier));
}

