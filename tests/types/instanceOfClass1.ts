import {Vts} from '../../src/vts.js';

class Class1 {

  public _hidden = true;

  protected show(): void {
    console.log(this._hidden);
  }

}

export const InstanceOfClass1Schema = Vts.instanceof(Class1);

export const InstanceOfClass1Data = new Class1();