import {Vts} from '../../src/vts.js';

export const ObjectSimpleSchema = Vts.object({
  name: Vts.string()
});

export const ObjectSimpleData = {
  name: '1'
};