import * as _ from 'lodash';
import { modify } from './modify';

export default function arrayModify(arr, modifier) {
  return _.map(arr, elem => modify(elem, modifier));
}

