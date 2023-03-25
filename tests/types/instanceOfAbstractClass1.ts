import {Vts} from '../../src/vts.js';

abstract class Class1 {

  public _hidden = true;

  protected show(): void {
    console.log(this._hidden);
  }

}

class Class2 extends Class1 {

}

export const InstanceOfAbstractClass1Schema = Vts.instanceof(Class1);

export const InstanceOfAbstractClass1Data = new Class2();