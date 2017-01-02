import {modify} from './modify';
import * as _ from 'lodash';

export function arrayModify(arr, modifier) {
    return _.map(arr, (elem) => modify(elem, modifier));
}

