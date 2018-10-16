import { Common } from "../common";
import ElementUtil from "./common/element-util";
import {autoinject, bindable, bindingMode, customElement, ObserverLocator, TaskQueue} from "aurelia-framework";

/*
* This is a checkbox
*/

@customElement("ce-checkbox")
@autoinject()
export class CECheckbox {
    public common: Common;
    public taskQueue: TaskQueue;
    public observerLocator: ObserverLocator;


    /** @param */
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public item: Boolean;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public displayAttribute: string;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public valueAttribute: string;

    // default options for all elements, must be set here, because base class cant declare bindables
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public disabled: boolean = false;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public label: string;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public secondaryLabel: string;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public pre: string;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public instructions: string;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public placeholder: string = "";
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public warningMsg: string = "Warning";
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public isWarning: boolean = false;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public required: boolean = false;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public errorMsg: string = "Value required";
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public isValid: boolean = true;

    @bindable public formName: string = "default";
    @bindable public changing: Function;
    @bindable public change: Function;
    @bindable public validate: Function;

    private _emptyValue: boolean = false;
    private _charLimitForStacked: Number = 42;
    private _charLimitForStackedLongText: Number = 120;
    private _isStackedClass: boolean = false;
    private _isStackedLongText: boolean = false;

    private _areObjects: boolean = false;
    private _activeMap: boolean[];
    private _arrayObserver: any;
    private _validate: Function;
    private _formGroup: HTMLElement; // element ref
    private _clear: Function; // set in inheritor
    private _myValidator: Function; // set in inheritor

    constructor(observerLocator: ObserverLocator, common: Common, taskQueue: TaskQueue) {
        this.common = common;
        this.taskQueue = taskQueue;
        this.observerLocator = observerLocator;

        this._validate = this.defaultValidate;
        // clear is called by the 
        this._clear = (onlyClearValidation: boolean) => {
            this.isValid = true;
            if (!onlyClearValidation) {
                this.item = this._emptyValue;
             }
        };
        this._myValidator = () => {
                if (this.required && ElementUtil.isVisible(this._formGroup)) {
                    this.isValid =  this._validate({ item: this.item });
                }
                return this.isValid; };
    }

    public attached() {
        this.isValid = true;
        if (this.validate) { this._validate = this.validate; }
        ElementUtil.attached(this.common, this.formName, this.required, this._clear, this._myValidator);
    }

    public itemChanged(newValue: any, oldValue: any) {
        if (this.required && ElementUtil.isVisible(this._formGroup) && newValue !== oldValue) {
            this.isValid = this._validate({ item: this.item });
            console.log("DEBUGGING CHECKBOX:" + this.item);
        }
        
    }

    public defaultValidate(args) {
        // we are only validating that there IS ONE value
        return args.item === true || args.item === false;
    }


    // this is fired AFTER the item changes, 
    // and only if the item changes from THIS control, not from external source
    public _changed(ev: MouseEvent, index) {

        // fix the active/not active class based on value, 
        // note that this is initially set via common.isActive but that only executes once
        // this._dirtyActiveTrigger = !this._dirtyActiveTrigger;
        let args = {
            event: ev,
            item: this.item
        };
        if (this.changing) { this.changing(args); }

        this.taskQueue.queueMicroTask(() => {
            if (this.change) { this.change(); }
        });
        return true;
    }

    public detached() {
        ElementUtil.detached(this.common, this.formName, this.required, this._clear, this._myValidator);
    }

}
