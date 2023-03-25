import {Vts} from '../../src/vts.js';
import {ObjectSimpleData, ObjectSimpleSchema} from './objectSimple.js';

export const ObjectOfObjectSimpleSchema = Vts.object({
  subObject: ObjectSimpleSchema
});

export const ObjectOfObjectSimpleData = {
  subObject: ObjectSimpleData
};