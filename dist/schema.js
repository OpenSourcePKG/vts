export class Schema {
    addError(_errors, _error) {
        _errors.push(_error);
    }
    addErrors(_errorsObject, _key, _errors) {
        _errorsObject[_key] ||= [];
        _errorsObject[_key].push(..._errors);
    }
}
