import {Schema, SchemaErrors} from '../src/schema.js';
import {ArrayOfBooleanData, ArrayOfBooleanSchema} from './types/arrayOfBoolean.js';
import {ArrayOfNumberOrStringData, ArrayOfNumberOrStringSchema} from './types/arrayOfNumberOrString.js';
import {ArrayOfStringData, ArrayOfStringSchema} from './types/arrayOfString.js';
import {BooleanData, BooleanSchema} from './types/boolean.js';
import {DateData, DateSchema} from './types/date.js';
import {DateStringData, DateStringSchema} from './types/dateString.js';
import {DateStringInvalidData} from './types/dateStringInvalid.js';
import {EnumNumberData, EnumNumberSchema} from './types/enumNumber.js';
import {EnumStringData, EnumStringSchema} from './types/enumString.js';
import {EqualToEmptyStringData, EqualToEmptyStringSchema} from './types/equalToEmptyString.js';
import {EqualToNullData, EqualToNullSchema} from './types/equalToNull.js';
import {ErrorData, ErrorSchema} from './types/error.js';
import {InstanceOfAbstractClass1Data, InstanceOfAbstractClass1Schema} from './types/instanceOfAbstractClass1.js';
import {InstanceOfClass1Data, InstanceOfClass1Schema} from './types/instanceOfClass1.js';
import {InstanceOfClass2Data, InstanceOfClass2Schema} from './types/instanceOfClass2.js';
import {NullData, NullSchema} from './types/null.js';
import {NumberData, NumberSchema} from './types/number.js';
import {Object2SimpleData, Object2SimpleSchema} from './types/object2Simple.js';
import {ObjectOfObjectSimpleData, ObjectOfObjectSimpleSchema} from './types/objectOfObjectSimple.js';
import {ObjectSimpleData, ObjectSimpleSchema} from './types/objectSimple.js';
import {ObjectSimpleNonStrictData, ObjectSimpleNonStrictSchema} from './types/objectSimpleNonStrict.js';
import {OrStringNullSchema} from './types/orStringNull.js';
import {RegExpData, RegExpSchema} from './types/regexp.js';
import {StringData, StringSchema} from './types/string.js';
import {UndefinedData, UndefinedSchema} from './types/undefined.js';

enum SchemaType {
  arrayOfBoolean = 'arrayOfBoolean',
  arrayOfNumberOrString = 'arrayOfNumberOrString',
  arrayOfString = 'arrayOfString',
  boolean = 'boolean',
  date = 'date',
  dateString = 'dateString',
  equalToEmptyString = 'equalToEmptyString',
  equalToNull = 'equalToNull',
  enumNumber = 'enumNumber',
  enumString = 'enumString',
  error = 'error',
  instanceOfAbstractClass1 = 'instanceOfAbstractClass1',
  instanceOfClass1 = 'instanceOfClass1',
  instanceOfClass2 = 'instanceOfClass2',
  null = 'null',
  number = 'number',
  object2Simple = 'object2Simple',
  objectOfObjectSimple = 'objectOfObjectSimple',
  objectSimple = 'objectSimple',
  objectSimpleNonStrict = 'objectSimpleNonStrict',
  orStringNull = 'orStringNull',
  regexp = 'regexp',
  string = 'string',
  undefined = 'undefined'
}

enum DataType {
  arrayOfBoolean = 'arrayOfBoolean',
  arrayOfNumberOrString = 'arrayOfNumberOrString',
  arrayOfString = 'arrayOfString',
  boolean = 'boolean',
  date = 'date',
  dateString = 'dateString',
  dateStringInvalid = 'dateStringInvalid',
  equalToEmptyString = 'equalToEmptyString',
  equalToNull = 'equalToNull',
  enumNumber = 'enumNumber',
  enumString = 'enumString',
  error = 'error',
  instanceOfAbstractClass1 = 'instanceOfAbstractClass1',
  instanceOfClass1 = 'instanceOfClass1',
  instanceOfClass2 = 'instanceOfClass2',
  null = 'null',
  number = 'number',
  object2Simple = 'object2Simple',
  objectOfObjectSimple = 'objectOfObjectSimple',
  objectSimple = 'objectSimple',
  objectSimpleNonStrict = 'objectSimpleNonStrict',
  regexp = 'regexp',
  string = 'string',
  undefined = 'undefined'
}

const testSchemas: {
  [key in SchemaType]: Schema<unknown>
} = {
  [SchemaType.arrayOfBoolean]: ArrayOfBooleanSchema,
  [SchemaType.arrayOfNumberOrString]: ArrayOfNumberOrStringSchema,
  [SchemaType.arrayOfString]: ArrayOfStringSchema,
  [SchemaType.boolean]: BooleanSchema,
  [SchemaType.date]: DateSchema,
  [SchemaType.dateString]: DateStringSchema,
  [SchemaType.equalToEmptyString]: EqualToEmptyStringSchema,
  [SchemaType.equalToNull]: EqualToNullSchema,
  [SchemaType.error]: ErrorSchema,
  [SchemaType.enumNumber]: EnumNumberSchema,
  [SchemaType.enumString]: EnumStringSchema,
  [SchemaType.instanceOfAbstractClass1]: InstanceOfAbstractClass1Schema,
  [SchemaType.instanceOfClass1]: InstanceOfClass1Schema,
  [SchemaType.instanceOfClass2]: InstanceOfClass2Schema,
  [SchemaType.null]: NullSchema,
  [SchemaType.number]: NumberSchema,
  [SchemaType.object2Simple]: Object2SimpleSchema,
  [SchemaType.objectOfObjectSimple]: ObjectOfObjectSimpleSchema,
  [SchemaType.objectSimple]: ObjectSimpleSchema,
  [SchemaType.objectSimpleNonStrict]: ObjectSimpleNonStrictSchema,
  [SchemaType.orStringNull]: OrStringNullSchema,
  [SchemaType.regexp]: RegExpSchema,
  [SchemaType.string]: StringSchema,
  [SchemaType.undefined]: UndefinedSchema
};

const testData: {
  [key in DataType]: unknown
} = {
  [DataType.arrayOfBoolean]: ArrayOfBooleanData,
  [DataType.arrayOfNumberOrString]: ArrayOfNumberOrStringData,
  [DataType.arrayOfString]: ArrayOfStringData,
  [DataType.boolean]: BooleanData,
  [DataType.date]: DateData,
  [DataType.dateString]: DateStringData,
  [DataType.dateStringInvalid]: DateStringInvalidData,
  [DataType.equalToEmptyString]: EqualToEmptyStringData,
  [DataType.equalToNull]: EqualToNullData,
  [DataType.enumNumber]: EnumNumberData,
  [DataType.enumString]: EnumStringData,
  [DataType.error]: ErrorData,
  [DataType.instanceOfAbstractClass1]: InstanceOfAbstractClass1Data,
  [DataType.instanceOfClass1]: InstanceOfClass1Data,
  [DataType.instanceOfClass2]: InstanceOfClass2Data,
  [DataType.null]: NullData,
  [DataType.number]: NumberData,
  [DataType.object2Simple]: Object2SimpleData,
  [DataType.objectOfObjectSimple]: ObjectOfObjectSimpleData,
  [DataType.objectSimple]: ObjectSimpleData,
  [DataType.objectSimpleNonStrict]: ObjectSimpleNonStrictData,
  [DataType.regexp]: RegExpData,
  [DataType.string]: StringData,
  [DataType.undefined]: UndefinedData
};

const tests: {
  [schemaType in SchemaType]: {
    [dataType in DataType]?: boolean;
  }
} = {
  [SchemaType.arrayOfBoolean]: {
    [DataType.arrayOfBoolean]: true
  },
  [SchemaType.arrayOfNumberOrString]: {
    [DataType.arrayOfNumberOrString]: true,
    [DataType.arrayOfString]: true
  },
  [SchemaType.arrayOfString]: {
    [DataType.arrayOfString]: true
  },
  [SchemaType.boolean]: {
    [DataType.boolean]: true
  },
  [SchemaType.date]: {
    [DataType.date]: true
  },
  [SchemaType.dateString]: {
    [DataType.dateString]: true
  },
  [SchemaType.equalToEmptyString]: {
    [DataType.equalToEmptyString]: true
  },
  [SchemaType.equalToNull]: {
    [DataType.equalToNull]: true,
    [DataType.null]: true
  },
  [SchemaType.enumNumber]: {
    [DataType.enumNumber]: true
  },
  [SchemaType.enumString]: {
    [DataType.enumString]: true
  },
  [SchemaType.error]: {
    [DataType.error]: true
  },
  [SchemaType.instanceOfAbstractClass1]: {
    [DataType.instanceOfAbstractClass1]: true
  },
  [SchemaType.instanceOfClass1]: {
    [DataType.instanceOfClass1]: true
  },
  [SchemaType.instanceOfClass2]: {
    [DataType.instanceOfClass2]: true
  },
  [SchemaType.null]: {
    [DataType.equalToNull]: true,
    [DataType.null]: true
  },
  [SchemaType.number]: {
    [DataType.enumNumber]: true,
    [DataType.number]: true
  },
  [SchemaType.object2Simple]: {
    [DataType.object2Simple]: true
  },
  [SchemaType.objectOfObjectSimple]: {
    [DataType.objectOfObjectSimple]: true
  },
  [SchemaType.objectSimple]: {
    [DataType.objectSimple]: true,
    [DataType.objectSimpleNonStrict]: true
  },
  [SchemaType.objectSimpleNonStrict]: {
    [DataType.error]: true,
    [DataType.objectSimple]: true,
    [DataType.objectSimpleNonStrict]: true
  },
  [SchemaType.orStringNull]: {
    [DataType.dateString]: true,
    [DataType.dateStringInvalid]: true,
    [DataType.equalToEmptyString]: true,
    [DataType.equalToNull]: true,
    [DataType.enumString]: true,
    [DataType.null]: true,
    [DataType.string]: true
  },
  [SchemaType.regexp]: {
    [DataType.regexp]: true
  },
  [SchemaType.string]: {
    [DataType.dateString]: true,
    [DataType.dateStringInvalid]: true,
    [DataType.equalToEmptyString]: true,
    [DataType.enumString]: true,
    [DataType.string]: true
  },
  [SchemaType.undefined]: {
    [DataType.undefined]: true
  }
};

let successCnt = 0;
let failCnt = 0;
for (const schemaType of Object.values(SchemaType)) {
  for (const dataType of Object.values(DataType)) {
    const errors: SchemaErrors = [];
    const expectedResult = tests[schemaType][dataType] || false;
    if (testSchemas[schemaType].validate(testData[dataType], errors) === expectedResult) {
      successCnt += 1;
    } else {
      console.error(`ERR: schema "${schemaType}" > data "${dataType}"`, errors);
      failCnt += 1;
    }
  }
}

console.info(`Test finished: ${successCnt} of ${successCnt + failCnt} tests were successful and ${failCnt} failed.`);