import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    "./elements/input"
    , "./elements/checkboxlist"
    , "./elements/datepicker"
    , "./elements/dropdown"
    , "./elements/input"
    , "./elements/modal"
    , "./elements/radiogroup"
    , "./elements/radiolist"
    , "./elements/typeahead"
    , "./elements/money"
    , "./elements/ssn"
    , "./elements/text"
    , "./elements/duelingpicklist"
    , "./elements/multiselect"
    , "./elements/phone"]);
}
