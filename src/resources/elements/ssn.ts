import { autoinject, bindable, bindingMode, customElement, TaskQueue} from "aurelia-framework";
import * as _ from "lodash";
import { Common } from "../common";
import ElementUtil from "./common/element-util";
/*
* This is a SSN input.
*/
@customElement("ce-ssn")
@autoinject()
export class Text {
    public common: Common;
    public taskQueue: TaskQueue;

    @bindable({ defaultBindingMode: bindingMode.twoWay }) public item: any;
    @bindable public isNumber: boolean = false;
    @bindable public isPositive: boolean = true;
    @bindable public isLong: boolean = false;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public disabled: boolean = false;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public label: string;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public pre: string;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public instructions: string;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public placeholder: string = "";
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public warningMsg: string = "Warning";
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public isWarning: boolean = false;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public required: boolean = false;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public errorMsg: string = "Value required";
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public invalidMsg: string = "Invalid SSN format";
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public showError: boolean = true;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public isValid: boolean = true;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public isOverrideInvalid: boolean = false;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public maxlength: string = "11";
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public minlength: number = 11;

    @bindable public formName: string = "default";
    @bindable public changing: Function;
    @bindable public change: Function; // call via change.call="functionName"
    @bindable public validate: Function;

    private _input: Element;

    private _element: HTMLElement;
    private _validate: Function;
    private _formGroup: any; // element ref
    private _programaticErrorMessage: string = "Error When Binding Input.";
    private _clear: Function; // set in inheritor
    private _myValidator: Function; // set in inheritor
    private _emptyValue: any = null;  // will be null if objects, "" if string

    constructor(common: Common, taskQueue: TaskQueue) {
        this.common = common;
        this.taskQueue = taskQueue;

        this._validate = this.defaultValidate;
        // clear is called by hte
        this._clear = (onlyClearValidation: boolean) => {
            this.isValid = true;
            if (!onlyClearValidation) {
                this.item = this._emptyValue;
             }
        };
        this._myValidator = () => {
                if (this.required && ElementUtil.isVisible(this._formGroup)) {
                this.isValid =  this._validate({ item: this.item }); }
                return this.isValid; };
    }

    public attached() {
        this.isValid = true;
        if (this.validate) { this._validate = this.validate; }
        ElementUtil.attached(this.common, this.formName, this.required, this._clear, this._myValidator);
    }

    // this is fired before the item changes,
    // and if the item is changed externally or internally.
    public itemChanged(newValue: any, oldValue: any) {
        if (this.required && ElementUtil.isVisible(this._formGroup) && newValue !== oldValue) {
            this.isValid = this._validate({ item: this.item });
        }
    }

    // this is fired AFTER the item changes,
    // and only if the item changes from THIS control, not from external source
    public _changed(ev, index) {
        if (this.isNumber && this.isPositive
            && this.item != null && this.item !== "" && this.item.indexOf("-") >= 0) {
            this.item = this.item.replace("-", "");
        }

        if (this.changing) { this.changing({
            event: ev,
            item: this.item,
        }); }
        this.taskQueue.queueMicroTask(() => {
            if (this.change) { this.change(); }
        });
        return true;
    }

    public defaultValidate(args): boolean {
        // we are only validating that there is an item, and it is longer than ""
        if(this.required){
            return args.item != null && args.item != "" && args.item.length == this.minlength;
        } else {
            return ((args.item == null || args.item == "") || (args.item.length == this.minlength));
        }
    }
    keyupFunc(e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A, Command+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
        //Format SSN Number
        this.formatSSN();
    }
    onblurFunc(e) {
        this.isValid = this._validate({ item: this.item });
    }
    public formatSSN() {
        if(this.item) {
            let val: string = this.item.replace(/\D/g, '');
            let newVal: string = '';
            if(val.length > 4) {
            this.item = val;
            }
            if((val.length > 3) && (val.length < 6)) {
            newVal += val.substr(0, 3) + '-';
            val = val.substr(3);
            }
            if (val.length > 5) {
            newVal += val.substr(0, 3) + '-';
            newVal += val.substr(3, 2) + '-';
            val = val.substr(5);
            }
            newVal += val;
            this.item = newVal.substring(0, 11);
        }
    }
    public detached() {
        ElementUtil.detached(this.common, this.formName, this.required, this._clear, this._myValidator);
    }
}
