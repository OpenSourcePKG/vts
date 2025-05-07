import {Vts} from '../src/vts.js';

enum Colors {
  green = 'green',
  blue = 'blue',
  pink = 'pink'
}

enum CruiseControl {
  premium = 'premium',
  simple = 'simple'
}

const carSchema = Vts.object({
  colors: Vts.enum(Colors, {
    description: 'Possible color variations.'
  }),
  drivingAssistants: Vts.optional(Vts.object({
    cruiseControl: Vts.enum(CruiseControl, {
      description: 'Cruise control'
    }),
    laneAssist: Vts.boolean({
      description: 'Is lane assist installed?'
    })
  }, {
    description: 'Installed driving assistant systems.'
  })),
  extraInfo: Vts.object2(Vts.string({
    description: 'A name for the extra info'
  }), Vts.string({
    description: 'The value of the extra info'
  })),
  speedMax: Vts.number(),
  tires: Vts.number({
    description: 'Amount of tires.'
  }),
  _test1: Vts.undefined(),
  _test2: Vts.unknown(),
  _test3: Vts.regexp(),
  _test4: Vts.null(),
  _test5: Vts.instanceof(Vts),
  _test6: Vts.error(),
  _test7: Vts.date(),
  _test8: Vts.array(Vts.string())
}, {
  description: 'the main data object'
});

console.log(JSON.stringify(carSchema.describe(), null, 2));