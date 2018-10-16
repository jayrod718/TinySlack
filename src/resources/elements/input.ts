import { autoinject, bindable, bindingMode, customElement, TaskQueue} from "aurelia-framework";
import * as _ from "lodash";
import { Common } from "../common";
import ElementUtil from "./common/element-util";

@customElement("ce-input")
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
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public showError: boolean = true;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public isValid: boolean = true;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public isOverrideInvalid: boolean = false;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public showInlineHelp: boolean = false;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public showInlineHelpLink: boolean = false;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public inlineHelpMsg: string = "Bind Help Text HERE";
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public inlineHelpMsgAfterLink: string = ".";
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public inlineHelpLinkText: string = "More";
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public inlineHelpLink: string = "http://www.google.com";


    @bindable public formName: string = "default";
    @bindable public changing: Function;
    @bindable public change: Function; // call via change.call="functionName"
    @bindable public validate: Function;

    private _input: Element;

    private _element: Element;
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
        return args.item != null && args.item !== "";
    }

    public detached() {
        ElementUtil.detached(this.common, this.formName, this.required, this._clear, this._myValidator);
    }
}
