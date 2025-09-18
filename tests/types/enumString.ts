import {Vts} from '../../src/vts.js';

enum EnumString {
  KEY1 = 'value1',
  KEY2 = 'value2'
}

export const EnumStringSchema = Vts.enum(EnumString);

export const EnumStringData = EnumString.KEY1;