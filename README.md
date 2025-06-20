![Version](https://img.shields.io/badge/Version-4.0.0-blue)
![Node.js >=20](https://img.shields.io/badge/Node.js-%3E%3D20-brightgreen)
![type: module](https://img.shields.io/badge/type-module-orange)
![ESM Only](https://img.shields.io/badge/Module-ESM--only-success)


# VTS
<p align="center">
<img src="doc/images/logo.png" width="300px" style="border-radius: 15px;transition: transform .2s;object-fit: cover;">
<br><br>
Vts is a data type validation library written entirely in TypeScript. Its main focus lies on validating the types of the
given data (e.g. "is x a string") and not so much on validating the data itself (e.g. "is the length of the string x
equal to y") to ensure that external data is compatible with your own source code.
<br><br>
The package consists of some basic type guarded validator methods like isString() and isFunction() that can be accessed
via the main Vts object. Most of these validators are also encapsulated in schema classes which can be used to create
complex schemas. The main strategy when validating those complex schemas is to be as strict as possible.
</p>


## Installation

### Prerequisites

- NodeJS 20
- Vts is an ES module: You will need to upgrade your project configuration accordingly.
- TypeScript "strict" setting: Independently of Vts you should always use the typescript setting "strict: true" or else
  the types are not correctly reported by typescript itself. Also, you will avoid many other problems and potential
  bugs.

### Vts

`npm i --save https://github.com/OpenSourcePKG/vts`

## Quick Usage

INFO: In the following scripts the variable "someData" could be anything. It is only "typecasted" as unknown to prevent
TypeScript from narrowing the type.

### Simple validators

To just validate a single value you can do the following:

```typescript
import {Vts} from 'vts';

const someData = undefined as unknown;

if (Vts.isString(someData)) {
  console.log('someData is a string.');
} else if (Vts.isFunction(someData)) {
  console.log('someData is a function.');
}
```

There are many validators which are more precisely described in the API section.

### Schema validation

To validate complex data one should use the object validator which can be extended by other validators including object
validators themselves.

Schema Definition (definition.ts)

```typescript
import {ExtractSchemaResultType, Vts} from 'vts';

export const MyDataSchema = Vts.object({
  key1: Vts.string(),
  key2: Vts.optional(Vts.boolean()),
  key3: Vts.object({
    key4: Vts.or([
      Vts.number(),
      Vts.null()
    ])
  })
});

export type MyData = ExtractSchemaResultType<typeof MyDataSchema>;
```

Schema Usage 1 / straightforward inline usage (usage1.ts)

```typescript
import {SchemaErrors} from 'vts';
import {MyDataSchema} from './definition.js';

const someData = undefined as unknown;

/*
  The errors are populated by Vts and consist of a human readable
  description of faulty validations.
 */
const errors: SchemaErrors = [];
if (MyDataSchema.validate(someData, errors)) {
  // If someData is valid, print a message.
  console.log('someData is of type MyData.');
  // We could also access the keys of someData as defined
  // in MyDataSchema.
  console.log(someData.key1);
} else {
  console.log(errors);
}
```

Schema Usage 2 / Usage inside a function to showcase the usage of the automatically generated MyData type (usage2.ts)

```typescript
import {MyData, MyDataSchema} from './definition.js';

const someData = undefined as unknown;

/*
  For this example the errors are ignored by giving the .validate()
  method an empty array. Additionally, keys that exist in the data
  but are not defined in the schema are ignored. Usually that would
  be an error.
 */
const testFunction = (_data: unknown): MyData => {
  if (MyDataSchema.validate(_data, [], {
    objectSchema: {
      ignoreAdditionalItems: true
    }
  })) {
    return _data;
  }
  throw new Error('The data given to testFunction did not validate.');
};

// after validating someData
const validData = testFunction(someData);
console.log(validData.key3.key4);
```

## API

### Validators

Validators are accessible as static methods via the main Vts class. They are all prefixed by "is" and work basically all
the same. The first parameter is the data you want to check. The return type is a boolean that is type guarded so that
after
calling one of the validators, you can be sure that the data from the first parameter matches the expected type.

#### Vts.isArray

```
Vts.isArray(_val: unknown): _val is unknown[]
```

- param `_val`
  The data to be validated.
- returns:
  True if the given _val is an array, false otherwise.

#### Vts.isBoolean

```
Vts.isBoolean(_val: unknown): _val is boolean
```

- param `_val`
  The data to be validated.
- returns:
  True if the given _val is a boolean, false otherwise.

#### Vts.isDate

```
Vts.isDate(_val: unknown): _val is Date
```

- param `_val`
  The data to be validated.
- returns:
  True if the given _val is a useful Date, false otherwise.
  The special Date 'Invalid Date' is seen as a useless Date.

#### Vts.isError

```
Vts.isError(_val: unknown): _val is Error
```

- param `_val`
  The data to be validated.
- returns:
  True if the given _val is an Error, false otherwise.

#### Vts.isFinite

```
Vts.isFinite(_val: unknown): boolean
```

- param `_val`
  The data to be validated.
- returns:
  True if the given _val is finite, false otherwise
  (also see https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/number/isfinite).

#### Vts.isFunction

```
Vts.isFunction(_val: unknown): _val is FunctionOfAnyType
```

- param `_val`
  The data to be validated.
- returns:
  True if the given _val is a Function, false otherwise.

#### Vts.isInteger

```
Vts.isInteger(_val: unknown): _val is number
```

- param `_val`
  The data to be validated.
- returns:
  True if the given _val is an integer, false otherwise
  (also see https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/number/isinteger).

#### Vts.isInstanceOf

```
Vts.isInstanceOf<T>(_val: unknown, _constructor: AbstractClass<T>): _val is T
```

- param `_val`
  The data to be validated.
- param `_constructor`
  A class to use for the validation.
- returns:
  True if the given _val is an instance of _class, false otherwise
  (also see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof).

#### Vts.isNull

```
Vts.isNull(_val: unknown): _val is null
```

- param `_val`
  The data to be validated.
- returns:
  True if the given _val is null, false otherwise.

#### Vts.isNumber

```
Vts.isNumber(_val: unknown): _val is number
```

- param `_val`
  The data to be validated.
- returns:
  True if the given _val is a number and finite, false otherwise.

#### Vts.isObject

```
Vts.isObject(_val: unknown, _strict = true): _val is RecordOf<unknown>
```

- param `_val`
  The data to be validated.
- param `_strict`
  If false, the check is shallow (array, Date, RegExp and Error are also objects).
  If true, these types are excluded so that only simple objects are valid.
- returns:
  True if the given _val is an object, false otherwise.

#### Vts.isRegExp

```
Vts.isRegExp(_val: unknown): _val is RegExp
```

- param `_val`
  The data to be validated.
- returns:
  True if the given _val is a regular expression object, false otherwise.

#### Vts.isString

```
Vts.isString(_val: unknown): _val is string
```

- param `_val`
  The data to be validated.
- returns:
  True if the given _val is a string, false otherwise.

#### Vts.isSystemError

```
Vts.isSystemError(_val: unknown, _code?: string): _val is ErrnoException
```

- param `_val`
  The data to be validated.
- param `_code`
  An optional code string (e.g. ENOENT or EISDIR) that `_val.code` is checked against. If omitted `_val.code` can be
  any string.
- returns:
  True if the given _val is compatible with Node.js' ErrnoException, false otherwise.

#### Vts.isUndefined

```
Vts.isUndefined(_val: unknown): _val is undefined
```

- param `_val`
  The data to be validated.
- returns:
  True if the given _val is undefined, false otherwise.

### Basic Schemas

Basic schemas are encapsulated validators that are almost exclusively used inside an object schema to validate complex
data structures. They can be found in the "schemas" directory and all of them have a corresponding static method
inside the main Vts class (for ease of use). These methods are the ones that are NOT prefixed by "is".

#### Vts.array()

```
Vts.array(_elementSchema: S, _options?: SchemaOptions): ArraySchema<S>
```

- param `_elementSchema`
  A schema describing the elements of the array.
- param `_options` (optional)
  The [SchemaOptions](#SchemaOptions).
- returns:
  An instance of `ArraySchema`.

#### Vts.boolean()

```
Vts.boolean(_options?: SchemaOptions): BooleanSchema
```

- param `_options` (optional)
  The [SchemaOptions](#SchemaOptions).
- returns:
  An instance of `BooleanSchema`.

#### Vts.date()

```
Vts.date(_options?: SchemaOptions): DateSchema
```

- param `_options` (optional)
  The [SchemaOptions](#SchemaOptions).
- returns:
  An instance of `DateSchema`.

#### Vts.dateString()

```
Vts.dateString(_options?: StringSchemaOptions): DateStringSchema
```

- param `_options`
  The [StringSchemaOptions](#StringSchemaOptions).
  If the `test` callback is omitted, a callback is used that checks if the given value is a string that could be a valid
  date.
- returns:
  An instance of `DateStringSchema`.

#### Vts.discriminator()

```
Vts.discriminator(_schema: S): DiscriminatorSchema<S>
```

- param `_schema`
  A schema describing the subtype of the discriminator.
- returns:
  An instance of `DiscriminatorSchema` with the subtype `S`.

#### Vts.enum()

```
Vts.enum<T>(_value: T[] | Record<any, T>, _options?: SchemaOptions): OrSchema<EqualSchema<T>>
```

- param `_value`
  An object with keys and values or an array.
- param `_options` (optional)
  The [SchemaOptions](#SchemaOptions).
- returns:
  An instance of `OrSchema` with the subtype `EqualSchema` with the subtype `T`.

#### Vts.equal()

```
Vts.equal(_value: S, _options?: SchemaOptions): EqualSchema<S>
```

- param `_value`
  The subtype of the `EqualSchema` to be created.
- param `_options` (optional)
  The [SchemaOptions](#SchemaOptions).
- returns:
  An instance of `EqualSchema` with the subtype `S`.

#### Vts.error()

```
Vts.error(_options?: SchemaOptions): ErrorSchema
```

- param `_options` (optional)
  The [SchemaOptions](#SchemaOptions).
- returns:
  An instance of `ErrorSchema`.

#### Vts.false()

```
Vts.false(_options?: SchemaOptions): EqualSchema<false>
```

- param `_options` (optional)
  The [SchemaOptions](#SchemaOptions).
- returns:
  An instance of `EqualSchema` with the subtype `false`.

#### Vts.instanceof()

```
Vts.instanceof(_constructor: AbstractClass<S>, _options?: SchemaOptions): InstanceofSchema<S>
```

- param `_constructor`
  Some class.
- param `_options` (optional)
  The [SchemaOptions](#SchemaOptions).
- returns:
  An instance of `InstanceofSchema`.

#### Vts.null()

```
Vts.null(_options?: SchemaOptions): NullSchema
```

- param `_options` (optional)
  The [SchemaOptions](#SchemaOptions).
- returns:
  An instance of `NullSchema`.

#### Vts.number()

```
Vts.number(_options?: SchemaOptions): NumberSchema
```

- param `_options` (optional)
  The [SchemaOptions](#SchemaOptions).
- returns:
  An instance of `NumberSchema`.

#### Vts.object()

```
Vts.object(_items: Items, _options?: ObjectSchemaOptions): ObjectSchema<Items>
```

- param `_items`
  An object of keys and values.
  The keys of the schema are the keys of the data object to be validated.
  The values are schemas that describe the corresponding key.
- param `_options` (optional)
  The [ObjectSchemaOptions](#ObjectSchemaOptions).
- returns:
  An instance of `ObjectSchema`.

#### Vts.object2()

```
Vts.object2(_keySchema: KeySchema, _valuesSchema: ValuesSchema, _options?: SchemaOptions): Object2Schema<KeySchema, ValuesSchema>
```

- param `_keySchema`
  A schema describing the keys of the data to be validated.
- param `_valuesSchema`
  A schema describing the values of the data to be validated.
- param `_options` (optional)
  The [SchemaOptions](#SchemaOptions).
- returns:
  An instance of `Object2Schema`.

#### Vts.optional()

```
Vts.optional(_schema: S): OptionalSchema<S>
```

- param `_schema`
  The sub schema of the `OptionalSchema` to be created.
- returns:
  An instance of `OptionalSchema`.

#### Vts.or()

```
Vts.or(_schemas: S[], _options?: SchemaOptions): OrSchema<S>
```

- param `__schemas`
  An array of schemas used as sub schemas of the `OrSchema` to be created.
- param `_options` (optional)
  The [SchemaOptions](#SchemaOptions).
- returns:
  An instance of `OrSchema`.

#### Vts.regexp()

```
Vts.regexp(_options?: SchemaOptions): RegExpSchema
```

- param `_options` (optional)
  The [SchemaOptions](#SchemaOptions).
- returns:
  An instance of `RegExpSchema`.

#### Vts.string()

```
Vts.string(_options?: StringSchemaOptions): StringSchema
```

- param `_options` (optional)
  The [StringSchemaOptions](#StringSchemaOptions).
- returns:
  An instance of `StringSchema`.

#### Vts.true()

```
Vts.true(): EqualSchema<true>
```

- returns:
  An instance of `EqualSchema` with the subtype `true`.

#### Vts.unknown()

```
Vts.unknown(): UnknownSchema
```

- returns:
  An instance of `UnknownSchema`.

#### Vts.undefined()

```
Vts.undefined(): UndefinedSchema
```

- returns:
  An instance of `UndefinedSchema`.

### Types

#### SchemaOptions

This interface encapsulates the basic options of all schemas like the description that is used when the schema is
described via `someSchema.describe()`

#### StringSchemaOptions

Extends [SchemaOptions](#SchemaOptions) by an optional test callback is used during validation. If the test
fails an error will be returned.

#### ObjectSchemaOptions

Extends [SchemaOptions](#SchemaOptions) by:

- `ignoreAdditionalItems` (optional / default: false): Usually during validation any additional keys that are present in
  the data object that are not defined in the schema throw an error. If `ignoreAdditionalItems` is true, any additional
  items that exist in the data object are ignored during validation.
- `strict` (optional / default: false): If this is true, additional checks are made to ensure, that the data is an
  object and not an object-like see Vts.isObject.

### Notes

#### Vts.dateString()

This schema can be used to test if something is a valid date string. It tries to parse the given string via
`Date.parse()`. A `Date` that was transformed to a string via `JSON.stringify()` will be valid when validated with
`Vts.dateString()`. If this validation should not be sufficient you can provide a separate test callback in the options
like:

```typescript
Vts.dateString({
  test: (_val) => Moment(_val, MyDateStringFormat, true).isValid()
})
```

You will however need to install and update `Moment` yourself.

#### Vts.equal()

When using `Vts.equal()` with data that has a common type, a call like `Vts.equal(SomeString)` is usually sufficient.
When the schema is used for validation TypeScript will correctly assume that the data is of
the same type as `SomeString`. If however `SomeString` is a literal type like `'MyNewType'`, TypeScript will assume a
more general type when evaluating the type of the data (`string` in this case). If you do not want this to happen you
have to use a `const assertion`.

```typescript
// type of EqualSchema1 is narrowed to 'EqualSchema<string>'
const EqualSchema1 = Vts.equal('Test');

// type of EqualSchema1 is narrowed to 'EqualSchema<"Test">'
const EqualSchema2 = Vts.equal('Test' as const);
```

#### Vts.enum()

If you have an object with keys and values (preferrably an `enum`) and you would like to create a schema that says "one
of the values of the enum is valid" you could do something like this:

```typescript
enum ReportType {
  REPORT1 = 'annualReport',
  REPORT2 = 'monthlyReport',
  REPORT3 = 'weeklyReport'
}

const ReportSchema = Vts.object({
  type: Vts.or([
    Vts.equal(ReportType.REPORT1 as const),
    Vts.equal(ReportType.REPORT2 as const),
    Vts.equal(ReportType.REPORT3 as const)
  ])
});
```

A shorter form of this is possible with `Vts.enum()`

```typescript
enum ReportType {
  REPORT1 = 'annualReport',
  REPORT2 = 'monthlyReport',
  REPORT3 = 'weeklyReport'
}

const ReportSchema = Vts.object({
  type: Vts.enum(ReportType)
});
```

`Vts.enum()` can be used if you have a simple set of values that need to be validated. If however there is additional
data for each individual value of the `enum` you will have to use the long form above ideally together with
`Vts.discriminator()`.

#### Vts.discriminator()

To understand what `Vts.discriminator()` does lets assume the following complex schema:

```typescript
enum ReportType {
  REPORT1 = 'annualReport',
  REPORT2 = 'monthlyReport',
  REPORT3 = 'weeklyReport'
}

const ReportSchema = Vts.or([
  Vts.object({
    config: Vts.object({
      content: Vts.string(),
      downtime: Vts.number()
    }),
    name: Vts.string(),
    type: Vts.equal(ReportType.REPORT1 as const),
    unid: Vts.string()
  }),
  Vts.object({
    config: Vts.object({
      runners: Vts.array(Vts.string()),
      stencils: Vts.number()
    }),
    name: Vts.string(),
    type: Vts.equal(ReportType.REPORT2 as const),
    unid: Vts.string()
  })
]);

const data = {
  config: {
    content: 's',
    invalidKey: true
  },
  name: 'Report 1',
  type: ReportType.REPORT1,
  unid: '123'
} as unknown;

const errors: SchemaErrors = [];
if (ReportSchema.validate(data, errors)) {
  if (data.type === ReportType.REPORT1) {
    data.config.content;
  }
} else {
  console.error(JSON.stringify(errors, null, 2));
}
```

We define an `enum ReportType` that holds all the types of reports that are available.
We also define a `const ReportSchema` that consist of 3 similar object schemas. All of these schemas have a `config`,
`name`, `type` and `unid` key. The `name` and `unid` keys are of the same type in all the schemas, so let's just ignore
those. The `config` and `type` keys are completely different in each of the 3 schemas.
Because we tell Vts that the `type` key of the first schema is `ReportType.REPORT1` TypeScript is able to narrow the
type of `Data` after the validation.  
However, if we run this script, some errors are thrown:

```json
[
  "no match with any of the given schemas",
  {
    "schema0": [
      {
        "config": [
          {
            "downtime": [
              "missing required key"
            ],
            "invalidKey": [
              "unexpected additional key"
            ]
          }
        ]
      }
    ],
    "schema1": [
      {
        "config": [
          {
            "runners": [
              "missing required key"
            ],
            "stencils": [
              "missing required key"
            ],
            "content": [
              "unexpected additional key"
            ],
            "invalidKey": [
              "unexpected additional key"
            ]
          }
        ],
        "type": [
          "not equal to monthlyReport"
        ]
      }
    ]
  }
]
```

The output tells us that there was no match with any of the given schemas. It then tells us what exactly did not match
in each schema. While comparing the data with the first schema (schema0) Vts found that the data is missing the key
`downtime` and had an additional key `invalidKey`. With schema1 the key `type` did not match. At this point checking
the rest of the keys (in this case only `config`) is not relevant anymore. To reduce processing time and the amount of
errors that are reported, all the calls to `Vts.equal(ReportType.REPORTX as const)` should be wrapped with
`Vts.discriminator()`. They should then look like `Vts.discriminator(Vts.equal(ReportType.REPORTX as const))`.
The error output then omits all errors for schemas that did not match the discriminator:

```json
[
  "no match with any of the given schemas",
  {
    "schema0": [
      {
        "config": [
          {
            "downtime": [
              "missing required key"
            ],
            "invalidKey": [
              "unexpected additional key"
            ]
          }
        ]
      }
    ]
  }
]
```