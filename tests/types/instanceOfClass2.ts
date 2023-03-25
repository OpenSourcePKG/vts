import {Vts} from '../../src/vts.js';

class Class2 {

  public _hidden = true;

  protected show(): void {
    console.log(this._hidden);
  }

}

export const InstanceOfClass2Schema = Vts.instanceof(Class2);

export const InstanceOfClass2Data = new Class2();