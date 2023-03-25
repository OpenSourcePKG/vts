import {Vts} from '../../src/vts.js';

export const ObjectSimpleNonStrictSchema = Vts.object({
  name: Vts.string()
}, {
  objectSchema: {
    strict: false
  }
});

export const ObjectSimpleNonStrictData = {
  name: '1'
};