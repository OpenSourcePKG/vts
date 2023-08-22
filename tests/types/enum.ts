import {Vts} from '../../src/vts.js';

enum Enum {
  KEY1 = 'value1',
  KEY2 = 'value2'
}

export const EnumSchema = Vts.enum(Enum);

export const EnumData = Enum.KEY1;